"use client";
import "./globals.css";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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

    Promise.all([videoPromise, ...imagePromises]).then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <html lang="ar" dir="rtl">
        <head>
          <link rel="icon" href="/images/Logo.png" type="image/png" />
          <title>Embrocraft DZ</title>
          <meta name="description" content="اكتشف الملابس المطرزة..." />
        </head>
        <body className="bg-gray-100">
          <Loading />
        </body>
      </html>
    );
  }

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/Logo.png" type="image/png" />
        <title>Embrocraft DZ</title>
        <meta name="description" content="اكتشف الملابس المطرزة..." />
      </head>
      <body className="bg-gray-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
