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
  { id: 1, name: "هدست گیمینگ", price: 1290000, image: "https://via.placeholder.com/400x250.png?text=Headset" },
  { id: 2, name: "کیبورد مکانیکی", price: 990000, image: "https://via.placeholder.com/400x250.png?text=Keyboard" },
  { id: 3, name: "ساعت هوشمند", price: 1990000, image: "https://via.placeholder.com/400x250.png?text=Smart+Watch" },
  { id: 4, name: "موس گیمینگ", price: 590000, image: "https://via.placeholder.com/400x250.png?text=Mouse" },
  { id: 5, name: "اسپیکر بلوتوث", price: 890000, image: "https://via.placeholder.com/400x250.png?text=Speaker" },
  { id: 6, name: "گیم پد وایرلس", price: 1290000, image: "https://via.placeholder.com/400x250.png?text=Gamepad" },
  { id: 7, name: "مانیتور ۲۷ اینچ", price: 4990000, image: "https://via.placeholder.com/400x250.png?text=Monitor" },
  { id: 8, name: "میکروفون USB", price: 1590000, image: "https://via.placeholder.com/400x250.png?text=Mic" },
];

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const itemsPerSlide = 4;

  // حرکت اتوماتیک
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? mockProducts.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % mockProducts.length);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">محصولات ما</h2>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(current * 100) / itemsPerSlide}%)`,
          }}
        >
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="w-1/2 sm:w-1/3 md:w-1/4 flex-shrink-0 px-2"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
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
    </section>
  );
}
