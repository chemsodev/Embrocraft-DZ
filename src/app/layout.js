import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Logo.jpg" type="image/jpeg" />
        <title>Embroidery DZ</title>
        <meta name="description" content="Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!" />
        <meta property="og:url" content="https://embroidery-dz.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Embroidery DZ" />
        <meta property="og:description" content="Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!" />
        <meta property="og:image" content="https://embroidery-dz.vercel.app/images/Logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="embroidery-dz.vercel.app" />
        <meta property="twitter:url" content="https://embroidery-dz.vercel.app/" />
        <meta name="twitter:title" content="Embroidery DZ" />
        <meta name="twitter:description" content="Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!" />
        <meta name="twitter:image" content="https://embroidery-dz.vercel.app/images/Logo.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
