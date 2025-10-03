"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"

type Project = {
  id: string
  title: string
  description: string
  status: "ongoing" | "completed" | "planned"
  location: string
  date: string
  image?: string
  details: { key: string; value: string }[]
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProject() {
      try {
        setLoading(true)
        setError(null)

        // ⏳ شبیه‌سازی API
        await new Promise((r) => setTimeout(r, 1200))
        const fakeProjects: Project[] = [
          {
            id: "powerplant-1",
            title: "ساخت نیروگاه سیکل ترکیبی یزد",
            description:
              "این پروژه شامل طراحی و ساخت نیروگاه سیکل ترکیبی 500 مگاواتی در استان یزد است. هدف اصلی افزایش ظرفیت تولید برق کشور با راندمان بالا و مصرف سوخت بهینه می‌باشد.",
            status: "ongoing",
            location: "یزد، ایران",
            date: "1402/05/12",
            image: "/placeholder.png",
            details: [
              { key: "ظرفیت", value: "500 مگاوات" },
              { key: "نوع", value: "سیکل ترکیبی" },
              { key: "کارفرما", value: "وزارت نیرو" },
            ],
          },
          {
            id: "solar-2",
            title: "پروژه نیروگاه خورشیدی کرمان",
            description:
              "احداث نیروگاه خورشیدی 50 مگاواتی با فناوری پنل‌های خورشیدی پیشرفته در استان کرمان.",
            status: "completed",
            location: "کرمان، ایران",
            date: "1401/10/01",
            image: "/placeholder.png",
            details: [
              { key: "ظرفیت", value: "50 مگاوات" },
              { key: "نوع", value: "خورشیدی" },
              { key: "کارفرما", value: "شرکت توانیر" },
            ],
          },
        ]

        const found = fakeProjects.find((p) => p.id === id)
        if (!found) throw new Error("پروژه یافت نشد")
        setProject(found)
      } catch (err: any) {
        setError(err.message || "خطا در بارگذاری پروژه")
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
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

  if (!project) return null

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      {/* هدر پروژه */}
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {/* تصویر */}
        <div className="relative w-full h-80 md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
              بدون تصویر
            </div>
          )}
        </div>

        {/* اطلاعات اصلی */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* وضعیت */}
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit ${
              project.status === "ongoing"
                ? "bg-yellow-100 text-yellow-700"
                : project.status === "completed"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {project.status === "ongoing"
              ? "در حال اجرا"
              : project.status === "completed"
              ? "تکمیل‌شده"
              : "برنامه‌ریزی‌شده"}
          </span>

          {/* مشخصات */}
          <ul className="space-y-2 mb-6">
            {project.details.map((d, i) => (
              <li
                key={i}
                className="flex justify-between border-b pb-1 text-sm md:text-base text-gray-700"
              >
                <span>{d.key}</span>
                <span className="font-medium">{d.value}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500">
            📍 {project.location} | 🗓 {project.date}
          </p>
        </div>
      </div>

      {/* بخش بیشتر - اینجا می‌تونی اسلایدر عکس یا پروژه‌های مشابه اضافه کنی */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
        <h2 className="text-xl font-semibold mb-4">توضیحات تکمیلی</h2>
        <p className="text-gray-600 leading-relaxed">
          این پروژه یکی از مهم‌ترین پروژه‌های شرکت بوده و با همکاری چندین
          پیمانکار داخلی و خارجی اجرا شده است. جزئیات بیشتر و تصاویر اضافه بعداً
          از API دریافت خواهند شد.
        </p>
      </div>
    </div>
  )
}
