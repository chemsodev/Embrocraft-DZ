"use client";
import "./globals.css";
import Loading from "../components/Loading"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load video and images in parallel for efficient loading
    const videoPromise = new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = "/videos/hero.mp4";
      video.onloadeddata = resolve;
    });

    const imagesToLoad = ["/images/Logo.jpg"];
    const imagePromises = imagesToLoad.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        })
    );

    // Wait until all assets are loaded
    Promise.all([videoPromise, ...imagePromises]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/Logo.png" type="image/png" />
        <link rel="preload" href="/images/Logo.jpg" as="image" />
        <link rel="preload" href="/images/Logo.png" as="image" />
        <title>Embrocraft DZ</title>
        <meta
          name="description"
          content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمم واطلب قطعًا فريدة من نوعها بسهولة!"
        />
        <meta property="og:url" content="https://embrocraft-dz.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Embrocraft DZ" />
        <meta
          property="og:description"
          content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمم واطلب قطعًا فريدة من نوعها بسهولة!"
        />
        <meta property="og:image" content="https://embrocraft-dz.vercel.app/images/Logo.jpg" />
      </head>
      <body className="bg-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
