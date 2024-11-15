"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";

export default function TShirtGallery() {
    const [images, setImages] = useState([]); // State for all images fetched
    const [displayImages, setDisplayImages] = useState([]); // State for images to be displayed
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [firstLoadComplete, setFirstLoadComplete] = useState(false); // Track the first load
    const [nextCursor, setNextCursor] = useState(null); // Cursor for pagination

    const customLoader = ({ src }) => {
        return src;
    };

    // Fetch images function
    const fetchImages = useCallback(async () => {
        if (loading || !hasMore) return; // Prevent duplicate fetches or unnecessary fetching
        setLoading(true);

        try {
            const res = await fetch(`/api/getTShirts?next_cursor=${nextCursor}`);
            if (res.ok) {
                const data = await res.json();
                console.log("Fetched data:", data);

                if (data.images && data.images.length > 0) {
                    setImages((prev) => [...prev, ...data.images]); // Append new images
                    setDisplayImages((prev) => [
                        ...prev,
                        ...data.images.slice(0, 10), // Show 10 more images at a time
                    ]);
                    setNextCursor(data.next_cursor); // Update next cursor
                    setHasMore(!!data.next_cursor); // If there's no next cursor, stop fetching
                    setFirstLoadComplete(true); // Mark the first load as complete
                } else {
                    setHasMore(false); // No more images
                }
            } else {
                console.error("Failed to fetch images:", res.statusText);
            }
        } catch (error) {
            console.error("An error occurred while fetching images:", error);
        } finally {
            setLoading(false); // Always reset loading state
        }
    }, [loading, hasMore, nextCursor]);

    // Infinite scroll handler
    const handleScroll = useCallback(() => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
            if (hasMore && !loading && firstLoadComplete) {
                fetchImages(); // Load more images when near bottom
            }
        }
    }, [hasMore, loading, firstLoadComplete, fetchImages]);

    // Initial fetch and scroll listener
    useEffect(() => {
        fetchImages(); // Fetch initial images
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, fetchImages]);

    // Debug: Log updated images state
    useEffect(() => {
        console.log("Currently displaying images:", displayImages);
    }, [displayImages]);

    return (
        <div className="p-4 pt-20"> {/* Adjust padding-top for spacing below the header */}
            <h1 className="text-2xl font-bold mb-6 text-center">T-Shirt Gallery</h1>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayImages.length > 0 ? (
                    displayImages.map((image, index) => (
                        <div key={`${image.public_id}-${index}`} className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                            <Image
                                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 image-fade-in"
                                loader={customLoader}
                                unoptimized
                                src={image.secure_url ? image.secure_url : "/placeholder.jpg"}
                                alt={`T-Shirt ${image.public_id}`}
                                width={300}
                                height={300}
                                loading="lazy"
                                style={{ filter: "blur(10px)", transition: "filter 0.3s" }}
                                onLoad={(e) => {
                                    if (e.target && e.target.style) {
                                        e.target.style.filter = "blur(0)";
                                    }
                                }}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-xl text-gray-600">No images available</div>
                )}
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="text-center my-6">
                    <Loading />
                </div>
            )}

            {/* No More Images Message */}
            {!hasMore && !loading && (
                <p className="text-center mt-6 text-xl text-gray-600">No more images to load</p>
            )}
            {loading && !hasMore && (
                <div className="text-center my-6 text-gray-600">Loading more images...</div>
            )}
        </div>
    );
}
