"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const products = [
  { name: "توربین گاز", img: "/images/product-turbine.jpg", desc: "توربین‌های پرقدرت برای نیروگاه" },
  { name: "پنل خورشیدی", img: "/images/product-solar.jpg", desc: "پنل‌های با راندمان بالا" },
  { name: "ژنراتور برق", img: "/images/product-generator.jpg", desc: "ژنراتورهای صنعتی با ظرفیت بالا" },
]

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">محصولات ما</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          محصولات با کیفیت جهانی برای صنایع و نیروگاه‌ها.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition overflow-hidden"
          >
            <Image src={p.img} alt={p.name} width={400} height={250} className="object-cover w-full" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{p.name}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
