import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function OrderForm({ selectedImage }) {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        address: '',
        shirtColor: '',
    });

    const customLoader = ({ src }) => src;
    const pathname = usePathname();
    const category = pathname.split('/').pop(); // Extract category from the path

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `طلب حياكة مخصصة:
الاسم الكامل: ${formData.fullName}
رقم الهاتف: ${formData.phoneNumber}
البريد الإلكتروني: ${formData.email}
العنوان: ${formData.address}
لون القميص: ${formData.shirtColor}
معاينة التصميم: ${selectedImage.secure_url}`;

        const whatsappUrl = `https://wa.me/0559632946(?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="flex flex-col items-center bg-gray-50 min-h-screen py-10">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">طلب حياكة مخصصة</h2>

                {/* Preview Image Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">معاينة التصميم المحدد</h3>
                    <div className="w-full max-w-lg mx-auto">
                        <Image
                            className="object-cover w-60 h-auto rounded-md border border-gray-200"
                            loader={customLoader}
                            unoptimized
                            src={selectedImage.secure_url}
                            alt={`${category} ${selectedImage.public_id}`}
                            width={500}
                            height={500}
                            placeholder="blur"
                            blurDataURL="/images/t-shirtcat.png"
                        />
                    </div>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="block text-right text-sm font-medium text-gray-700">الاسم الكامل</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="الاسم الكامل"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block text-right text-sm font-medium text-gray-700">رقم الهاتف</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="0555555555"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-right text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-right text-sm font-medium text-gray-700">العنوان</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="العنوان الكامل"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Shirt Color */}
                    <div>
                        <label className="block text-right text-sm font-medium text-gray-700">لون القميص</label>
                        <select
                            name="shirtColor"
                            value={formData.shirtColor}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">اختر اللون</option>
                            <option value="white">أبيض</option>
                            <option value="black">أسود</option>
                            <option value="blue">أزرق</option>
                            <option value="red">أحمر</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            تقديم الطلب
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OrderForm;
