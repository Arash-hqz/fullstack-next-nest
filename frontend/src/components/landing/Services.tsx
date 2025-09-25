
"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { IMAGES } from "@/lib/images"


export function Services() {
  const services = [
    {
      title: "طراحی",
      desc: "طراحی صنعتی و مشاوره تخصصی برای پروژه‌های شما",
      image: IMAGES.services.maintenance,
      link: "/services/design",
    },
    {
      title: "نصب و راه‌اندازی",
      desc: "اجرای کامل و راه‌اندازی پروژه‌ها با تیم متخصص",
      image: IMAGES.services.install,
      link: "/services/installation",
    },
    {
      title: "نگهداری و پشتیبانی",
      desc: "خدمات بلندمدت و پشتیبانی عملیات",
      image: IMAGES.services.design,
      link: "/services/maintenance",
    },
  ]

  const [current, setCurrent] = useState(0)

  // تغییر اتوماتیک هر 30 ثانیه
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % services.length)
    }, 30000)
    return () => clearInterval(timer)
  }, [])

  const handleNext = () => {
    setCurrent((current + 1) % services.length)
  }

  return (
    <section className="relative py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">خدمات ما</h2>
      <div className="relative h-96 md:h-80 flex items-center justify-center overflow-hidden rounded-xl">
        {services.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between transition-opacity duration-1000 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* متن سمت چپ */}
            <div className="md:w-1/2 p-4 md:p-12 text-center md:text-right">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-700 mb-6">{s.desc}</p>
              <div className="flex justify-center md:justify-start gap-4">
                <Link
                  href={s.link}
                  className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  مشاهده جزئیات
                </Link>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
                >
                  اسلاید بعد
                </button>
              </div>
            </div>

            {/* عکس سمت راست */}
            <div className="md:w-1/2 p-4 md:p-12 flex justify-center">
              <Image
                src={s.image}
                alt={s.title}
                width={400}
                height={300}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
