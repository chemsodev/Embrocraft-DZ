// app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/images/Logo.png" type="image/png" />
        <link rel="preload" href="/images/Logo.jpg" as="image" />
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
