import React from 'react';
import Card from './ClothingCategoriesCard';


export default function ClothingCategories() {
  const clothingCategories = [
    {
      title: "تيشيرتات",
      href: "/design/t-shirts",
      imageSrc: "/images/t-shirtcat.png",
      description: "اختر من بين مجموعة متنوعة من التيشيرتات الكلاسيكية والعصرية لعرض تطريزك الخاص بأناقة.",
    },
    {
      title: "سترات بقلنسوة",
      href: "/design/hoodies",
      imageSrc: "/images/hoodiecat.png",
      description: "استمتع بالدفء والأناقة مع ستراتنا عالية الجودة، وخصصها بتطريز شخصي يعكس ذوقك.",
    },
    {
      title: "كنزات",
      href: "/design/sweatshirts",
      imageSrc: "/images/sweet-shirtcat.png",
      description: "حافظ على دفئك وأناقتك مع مجموعتنا من الكنزات المثالية لكل مناسبة غير رسمية.",
    },
  ];

  return (
    <div className="py-16  text-center bg-transparent" id="clothing-categories">
      <h2 className="text-4xl font-bold mb-12">تصفح تصنيفات الملابس</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        {clothingCategories.map((category, index) => (
          <Card
            key={index}
            title={category.title}
            href={category.href}
            imageSrc={category.imageSrc}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}