"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from 'next/navigation'; // To get the dynamic category
import Image from "next/image";
import Loading from "@/components/Loading";
import OrderForm from "@/components/OrderForm";

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split('/').pop(); // Extract category from the path

  const [images, setImages] = useState([]); // State for all images fetched
  const [displayImages, setDisplayImages] = useState([]); // State for images to be displayed
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(null); // Cursor for pagination
  const [firstLoadComplete, setFirstLoadComplete] = useState(false); // Track the first load
  const [error, setError] = useState(null); // State for error handling
  const customLoader = ({ src }) => src;

  // To track the already seen public_ids and prevent duplicates
  const seenImageIds = new Set();

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
          // Filter out images that have already been seen based on public_id
          const newImages = data.images.filter(
            (newImage) => !seenImageIds.has(newImage.public_id)
          );

          // If we have unique images to add
          if (newImages.length > 0) {
            newImages.forEach((image) => {
              seenImageIds.add(image.public_id); // Add new unique image public_id to the set
            });

            setDisplayImages((prev) => [...prev, ...newImages]); // Add new unique images to display
            setImages((prev) => [...prev, ...newImages]); // Append new images to all images
          }

          setNextCursor(data.next_cursor); // Update next cursor
          setHasMore(!!data.next_cursor); // If there's no next cursor, stop fetching
          setFirstLoadComplete(true); // Mark the first load as complete
        } else {
          setHasMore(false); // No more images
        }
      } else {
        setError("Failed to fetch images.");
      }
    } catch (error) {
      console.error("An error occurred while fetching images:", error);
      setError("An error occurred while fetching images.");
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

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image as the selected one
  };

  return (
    <div className="p-4 pt-16 md:pt-24">
      {!selectedImage ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">{category}</h1>
          {error && <p className="text-center text-red-500">{error}</p>} {/* Display error message */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 min-h-screen">
            {displayImages.length > 0 ? (
              displayImages.map((image, index) => (
                <div
                  key={`${image.public_id}-${index}`}
                  className="relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-125 image-fade-in"
                    loader={customLoader}
                    unoptimized
                    src={image.secure_url ? image.secure_url : "/images/t-shirtcat.png"}
                    alt={`${category} ${image.public_id}`}
                    width={300}
                    height={300}
                    loading="lazy"
                    placeholder="blur" // Use blur placeholder for smoother loading
                    blurDataURL="/images/t-shirtcat.png" // Placeholder image while loading
                  />
                </div>
              ))
            ) : (
              !loading && <div className="col-span-full text-xl text-gray-600 min-h-screen flex justify-center items-center">لا يتوفر منتجات</div>
            )}
          </div>
          {loading && <Loading className="z-1" />} {/* Show loading spinner */}
          {!hasMore && !loading && <p className="text-center mt-6 text-xl min-h-screen flex justify-center items-center text-gray-600">لا مزيد من المنتجات</p>}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <OrderForm selectedImage={selectedImage} />
        </div>
      )}
    </div>
  );
}
