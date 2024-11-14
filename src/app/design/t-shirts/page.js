"use client";
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Loading from '@/components/Loading';

export default function TShirtGallery() {
  const [images, setImages] = useState([]); // Final images state
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch images function
  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/getTShirts${nextCursor ? `?next_cursor=${nextCursor}` : ''}`);
      if (res.ok) {
        const data = await res.json();
        console.log("Fetched data:", data);

        if (data.images && data.images.length > 0) {
          // Wait until all images are fetched before showing them
          setImages((prevImages) => [...prevImages, ...data.images]); // Append new images to existing images
          setNextCursor(data.next_cursor || null);
          setHasMore(!!data.next_cursor); // If there's a next cursor, there are more images
        } else {
          setHasMore(false); // No more images to fetch
        }
      } else {
        console.error('Failed to fetch images:', res.statusText);
      }
    } catch (error) {
      console.error('An error occurred while fetching images:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, nextCursor]);

  // Handle scroll to trigger fetch
  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
      if (hasMore && !loading) {
        fetchImages(); // Fetch more images when near bottom
      }
    }
  }, [hasMore, loading, fetchImages]);

  useEffect(() => {
    fetchImages(); // Initial fetch
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, fetchImages]);

  useEffect(() => {
    console.log("Current images in state:", images);
  }, [images]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">T-Shirt Gallery</h1>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={`${image.public_id}-${index}`} className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                src={image.secure_url || '/placeholder.jpg'}  // Placeholder if image is unavailable
                alt={`Image ${image.public_id}`}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                loading="lazy"
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

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={fetchImages}
            className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Load More Images
          </button>
        </div>
      )}
    </div>
  );
}
