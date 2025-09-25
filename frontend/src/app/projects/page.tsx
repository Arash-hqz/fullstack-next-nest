"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  { title: "نیروگاه خورشیدی", img: "/images/project-solar.jpg", desc: "پروژه انرژی پاک در جنوب ایران" },
  { title: "نیروگاه گازی", img: "/images/project-gas.jpg", desc: "افزایش راندمان با فناوری روز" },
  { title: "زیرساخت صنعتی", img: "/images/project-infra.jpg", desc: "ساخت زیرساخت‌های حیاتی" },
]

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">پروژه‌های ما</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          نگاهی به پروژه‌های موفق ما در حوزه انرژی و صنعت.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <Image src={p.img} alt={p.title} width={400} height={250} className="object-cover w-full" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
