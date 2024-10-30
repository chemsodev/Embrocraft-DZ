import "./globals.css";


export const metadata = {
  title: "Embroidery DZ",
  description: "Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!",
  openGraph: {
    images: "/images/logo.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
    </head>
    <body>
      {children}
    </body>
  </html>

  );
}
