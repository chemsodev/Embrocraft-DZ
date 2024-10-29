import "./globals.css";


export const metadata = {
  title: "Embroidery DZ",
  description: "Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
