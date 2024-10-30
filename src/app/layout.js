import "./globals.css";  

export const metadata = {  
  title: "Embroidery DZ",  
  description: "Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!",  
  openGraph: {  
    title: "Embroidery DZ",  
    description: "Discover your perfect custom embroidered clothing that reflects your unique style and personality. Create, design, and order one-of-a-kind pieces with ease!",  
    images: "/images/Logo.jpg",  
    url: "https://embroidery-dz.vercel.app",
  }  
};  

export default function RootLayout({ children }) {  
  return (  
    <html lang="en">  
      <head>  
        <link rel="icon" href="/images/Logo.jpg" type="image/jpeg" />  
        <meta property="og:title" content={metadata.openGraph.title} />  
        <meta property="og:description" content={metadata.description} />  
        <meta property="og:image" content={metadata.openGraph.images} />  
        <meta property="og:url" content={metadata.openGraph.url} />  
      </head>  
      <body>  
        {children}  
      </body>  
    </html>  
  );  
}