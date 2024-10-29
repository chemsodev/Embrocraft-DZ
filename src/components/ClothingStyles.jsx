export default function ClothingStyles() {
  return (
    <div className="py-16 bg-white text-center"  id="clothing-styles">
      <h2 className="text-4xl font-bold mb-12">Browse Clothing Styles</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        <div className="border rounded-lg p-8 shadow-lg flex-1">
          <h3 className="text-2xl font-semibold mb-4">T-Shirts</h3>
          <p className="text-gray-600">
            Choose from a range of classic and contemporary t-shirt styles to showcase your custom embroidery.
          </p>
        </div>
        <div className="border rounded-lg p-8 shadow-lg flex-1">
          <h3 className="text-2xl font-semibold mb-4">Hoodies</h3>
          <p className="text-gray-600">
            Cozy up in a high-quality hoodie and make it your own with personalized embroidery.
          </p>
        </div>
        <div className="border rounded-lg p-8 shadow-lg flex-1">
          <h3 className="text-2xl font-semibold mb-4">Button-Ups</h3>
          <p className="text-gray-600">
            Elevate your look with a tailored button-up shirt, perfect for showcasing intricate embroidery designs.
          </p>
        </div>
      </div>
    </div>
  );
}
