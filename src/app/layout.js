import "./globals.css";


export const metadata = {
  title: "boutique rital",
  description: "embroidery boutique",
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
