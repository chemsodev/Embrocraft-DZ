"use client";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Loading from "@/components/Loading";
import OrderForm from "@/components/OrderForm";

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.split('/').pop();

  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [nextCursor, setNextCursor] = useState(null);
  const [firstLoadComplete, setFirstLoadComplete] = useState(false);
  const [error, setError] = useState(null);
  const customLoader = ({ src }) => src;

  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/getImagesByCategory/${category}?next_cursor=${nextCursor || ''}`);
      if (res.ok) {
        const data = await res.json();
        if (data.images && data.images.length > 0) {
          const displayedImageIds = new Set(displayImages.map(image => image.public_id));
          const newImages = data.images.filter(newImage => !displayedImageIds.has(newImage.public_id));

          if (newImages.length > 0) {
            setDisplayImages(prev => [...prev, ...newImages]);
            setImages(prev => [...prev, ...newImages]);
          }

          setNextCursor(data.next_cursor);
          setHasMore(!!data.next_cursor);
          setFirstLoadComplete(true);
        } else {
          setHasMore(false);
        }
      } else {
        setError("Failed to fetch images.");
      }
    } catch (error) {
      console.error("An error occurred while fetching images:", error);
      setError("An error occurred while fetching images.");
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, nextCursor, category, displayImages]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
      if (hasMore && !loading && firstLoadComplete) {
        fetchImages();
      }
    }
  }, [hasMore, loading, firstLoadComplete, fetchImages]);

  useEffect(() => {
    fetchImages();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, fetchImages]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="p-4 pt-16 md:pt-24">
      {!selectedImage ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-center">{category}</h1>
          {error && <p className="text-center text-red-500">{error}</p>}
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
                    placeholder="blur"
                    blurDataURL="/images/t-shirtcat.png"
                  />
                </div>
              ))
            ) : (
              !loading && <div className="col-span-full text-xl text-gray-600 min-h-screen flex text-center justify-center items-center">لا يتوفر منتجات</div>
            )}
          </div>
          {loading && <Loading className="z-1" />}
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