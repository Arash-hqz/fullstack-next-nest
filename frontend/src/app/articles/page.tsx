"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const articles = [
  { title: "رشد انرژی‌های تجدیدپذیر", date: "25 شهریور 1404", href: "/articles/1" },
  { title: "پیشرفت‌های جدید در توربین‌ها", date: "20 شهریور 1404", href: "/articles/2" },
  { title: "سرمایه‌گذاری جهانی در صنعت برق", date: "10 شهریور 1404", href: "/articles/3" },
]

export default function ArticlesPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">آخرین اخبار</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          جدیدترین اخبار و تحلیل‌ها در حوزه انرژی و صنعت.
        </p>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-4 border rounded-lg hover:shadow-md transition"
          >
            <Link href={a.href} className="text-xl font-semibold hover:text-red-600">
              {a.title}
            </Link>
            <p className="text-sm text-gray-500 mt-1">{a.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
