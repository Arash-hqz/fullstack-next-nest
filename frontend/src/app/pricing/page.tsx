"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type Result = {
  title: string
  desc: string
  percent: number
  value: number
}

export default function PricingPage() {
  const [budget, setBudget] = useState(100000) // مبلغ ورودی
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    // الگوریتم محاسبه بخش‌های هزینه
    const data: Result[] = [
      {
        title: "طراحی و مشاوره",
        desc: "هزینه‌های مربوط به طراحی و مشاوره تخصصی پروژه",
        percent: 0.1,
        value: budget * 0.1,
      },
      {
        title: "تجهیزات و مواد اولیه",
        desc: "خرید تجهیزات و مواد مصرفی مورد نیاز",
        percent: 0.45,
        value: budget * 0.45,
      },
      {
        title: "اجرا و نصب",
        desc: "هزینه نیروی انسانی و نصب تجهیزات",
        percent: 0.3,
        value: budget * 0.3,
      },
      {
        title: "نگهداری و پشتیبانی",
        desc: "خدمات بلندمدت برای پایداری و نگهداری پروژه",
        percent: 0.15,
        value: budget * 0.15,
      },
    ]
    setResults(data)
  }, [budget])

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">محاسبه هزینه پروژه</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          مبلغ موردنظر خود را وارد کنید تا برآورد هزینه‌ها را به تفکیک مشاهده کنید.
        </p>
      </div>

      {/* Input */}
      <div className="flex flex-col items-center gap-4 mb-12">
        <input
          type="range"
          min={50000}
          max={1000000}
          step={5000}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full md:w-2/3 accent-red-600"
        />
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="border rounded-lg p-2 w-40 text-center"
        />
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-8">
        {results.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
            <p className="text-gray-600 mb-4">{r.desc}</p>
            <div className="flex justify-between items-center font-bold">
              <span>{(r.percent * 100).toFixed(0)}%</span>
              <span>{r.value.toLocaleString()} تومان</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: results.length * 0.2 }}
        className="mt-12 text-center bg-red-600 text-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-2">جمع کل برآورد</h2>
        <p className="text-3xl font-extrabold">{budget.toLocaleString()} تومان</p>
        <button className="mt-6 px-6 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition">
          درخواست مشاوره
        </button>
      </motion.div>
    </section>
  )
}
