"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "طراحی و مشاوره",
    desc: "طراحی صنعتی و ارائه راهکارهای نوین متناسب با نیاز شما",
    img: "/images/service-design.jpg",
  },
  {
    title: "نصب و راه‌اندازی",
    desc: "راه‌اندازی کامل پروژه‌ها با استانداردهای جهانی",
    img: "/images/service-install.jpg",
  },
  {
    title: "نگهداری و پشتیبانی",
    desc: "پشتیبانی فنی و خدمات پس از فروش برای پروژه‌های بلندمدت",
    img: "/images/service-maintenance.jpg",
  },
]

export default function ServicesPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">خدمات ما</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          از طراحی تا نصب و نگهداری، خدمات جامع و تخصصی ارائه می‌دهیم.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative h-52">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                درخواست مشاوره
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
