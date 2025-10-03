"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"

type Product = {
  id: string
  title: string
  description: string
  price: string
  specs: { key: string; value: string }[]
  image?: string
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true)
        setError(null)

        // ❗️اینجا بعداً API واقعی جایگزین میشه
        await new Promise((r) => setTimeout(r, 1200)) // شبیه‌سازی تاخیر
        const fakeProducts: Product[] = [
          {
            id: "generator-1",
            title: "ژنراتور برق صنعتی",
            description:
              "ژنراتور پرقدرت برای مصارف صنعتی و تجاری با راندمان بالا و پشتیبانی کامل.",
            price: "۵۰,۰۰۰,۰۰۰ تومان",
            specs: [
              { key: "توان خروجی", value: "500KW" },
              { key: "سوخت", value: "دیزل" },
              { key: "گارانتی", value: "۲ سال" },
            ],
            image: "/placeholder.png",
          },
          {
            id: "turbine-2",
            title: "توربین بخار",
            description:
              "توربین بخار صنعتی مناسب خطوط تولید با عملکرد پایدار و بهینه.",
            price: "۸۰,۰۰۰,۰۰۰ تومان",
            specs: [
              { key: "فشار کاری", value: "40bar" },
              { key: "دور موتور", value: "15000rpm" },
              { key: "مصرف سوخت", value: "بهینه" },
            ],
            image: "/placeholder.png",
          },
        ]

        const found = fakeProducts.find((p) => p.id === id)
        if (!found) throw new Error("محصول یافت نشد")
        setProduct(found)
      } catch (err: any) {
        setError(err.message || "خطا در بارگذاری محصول")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-red-600 border-t-transparent"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <p className="text-red-600 font-semibold mb-3">⚠️ {error}</p>
        <p className="text-gray-500">لطفا دوباره تلاش کنید</p>
      </div>
    )
  }

  if (!product) return null

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
      {/* تصویر */}
      <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
            بدون تصویر
          </div>
        )}
      </div>

      {/* متن */}
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {product.title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-red-600 mb-6">{product.price}</p>

        <div className="space-y-3 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">مشخصات:</h2>
          <ul className="space-y-2 text-gray-600">
            {product.specs.map((spec, i) => (
              <li
                key={i}
                className="flex justify-between border-b pb-1 text-sm md:text-base"
              >
                <span>{spec.key}</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  )
}
