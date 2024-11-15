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
  <link rel="icon" href="/images/Logo.jpg" type="image/jpeg" />
  <title>Embrocraft DZ</title>
  <meta name="description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta property="og:url" content="https://embrocraft-dz.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Embrocraft DZ" />
  <meta property="og:description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta property="og:image" content="https://embrocraft-dz.vercel.app/images/Logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="embrocraft-dz.vercel.app" />
  <meta property="twitter:url" content="https://embrocraft-dz.vercel.app/" />
  <meta name="twitter:title" content="Embrocraft DZ" />
  <meta name="twitter:description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta name="twitter:image" content="https://embrocraft-dz.vercel.app/images/Logo.jpg" />
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
  <link rel="icon" href="/images/Logo.jpg" type="image/jpeg" />
  <title>Embrocraft DZ</title>
  <meta name="description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta property="og:url" content="https://embroidery-dz.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Embrocraft DZ" />
  <meta property="og:description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta property="og:image" content="https://embroidery-dz.vercel.app/images/Logo.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="embroidery-dz.vercel.app" />
  <meta property="twitter:url" content="https://embroidery-dz.vercel.app/" />
  <meta name="twitter:title" content="Embrocraft DZ" />
  <meta name="twitter:description" content="اكتشف الملابس المطرزة المخصصة التي تعكس أسلوبك وشخصيتك الفريدة. أنشئ وصمّم واطلب قطعًا فريدة بسهولة!" />
  <meta name="twitter:image" content="https://embroidery-dz.vercel.app/images/Logo.jpg" />
</head>

      <body className="bg-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
