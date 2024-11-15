"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from 'next/navigation'; // To get the dynamic category
import Image from "next/image";
import Loading from "@/components/Loading";

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split('/').pop(); // Extract category from the path

  const [images, setImages] = useState([]); // State for all images fetched
  const [displayImages, setDisplayImages] = useState([]); // State for images to be displayed
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(null); // Cursor for pagination
  const [firstLoadComplete, setFirstLoadComplete] = useState(false); // Track the first load
  const [error, setError] = useState(null); // State for error handling
  const customLoader = ({ src }) => {
    return src;
};

  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return; // Prevent duplicate fetches or unnecessary fetching
    setLoading(true);
    setError(null); // Reset error state on new fetch

    try {
      const res = await fetch(`/api/getImagesByCategory/${category}?next_cursor=${nextCursor}`);
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
        setError("Failed to fetch images."); // Set error message
      }
    } catch (error) {
      console.error("An error occurred while fetching images:", error);
      setError("An error occurred while fetching images."); // Set error message
    } finally {
      setLoading(false); // Always reset loading state
    }
  }, [loading, hasMore, nextCursor, category]);

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

  return (
    <div className="p-4 pt-20">
      <h1 className="text-2xl font-bold mb-6 text-center">{category} Gallery</h1>
      {error && <p className="text-center text-red-500">{error}</p>} {/* Display error message */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayImages.length > 0 ? (
          displayImages.map((image, index) => (
            <div key={`${image.public_id}-${index}`} className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105 image-fade-in"
                loader={customLoader}
                unoptimized
                src={image.secure_url ? image.secure_url : "/images/t-shirtcat.png"}
                alt={`${category} ${image.public_id}`}
                width={300}
                height={ 300}
                loading="lazy"
                placeholder="blur" // Use blur placeholder for smoother loading
                blurDataURL="/images/t-shirtcat.png" // Placeholder image while loading
                onLoadingComplete={(img) => {
                  img.target.style.filter = "blur(0)"; // Remove blur effect once loaded
                }}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-600">No images available</div>
        )}
      </div>
      {loading && <Loading />} {/* Show loading spinner */}
      {!hasMore && !loading && <p className="text-center mt-6 text-xl text-gray-600">No more images to load</p>}
    </div>
  );
}