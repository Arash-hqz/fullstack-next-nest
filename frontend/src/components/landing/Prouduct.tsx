"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const mockProducts: Product[] = [
  {
    id: 1,
    name: "هدست گیمینگ",
    price: 1290000,
    image: "https://via.placeholder.com/400x250.png?text=Headset",
  },
  {
    id: 2,
    name: "کیبورد مکانیکی",
    price: 990000,
    image: "https://via.placeholder.com/400x250.png?text=Keyboard",
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    price: 1990000,
    image: "https://via.placeholder.com/400x250.png?text=Smart+Watch",
  },
  {
    id: 4,
    name: "موس گیمینگ",
    price: 590000,
    image: "https://via.placeholder.com/400x250.png?text=Mouse",
  },
  {
    id: 5,
    name: "اسپیکر بلوتوث",
    price: 890000,
    image: "https://via.placeholder.com/400x250.png?text=Speaker",
  },
  {
    id: 6,
    name: "گیم پد وایرلس",
    price: 1290000,
    image: "https://via.placeholder.com/400x250.png?text=Gamepad",
  },
];

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 4;

  // حرکت اتوماتیک هر 10 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? Math.floor(mockProducts.length / itemsPerSlide) - 1
        : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % Math.ceil(mockProducts.length / itemsPerSlide)
    );
  };

  // محاسبه آیتم‌های فعلی
  const startIndex = current * itemsPerSlide;
  const currentItems = mockProducts.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <section className="relative w-full max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        محصولات ما
      </h2>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-bold mb-4">
                    {product.price.toLocaleString("fa-IR")} تومان
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <ShoppingCart size={18} />
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* دکمه‌های کنترل */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* اندیکاتور پایین */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({
          length: Math.ceil(mockProducts.length / itemsPerSlide),
        }).map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
