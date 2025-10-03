"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"

type Article = {
  id: string
  title: string
  content: string
  date: string
  image?: string | null
}

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticle() {
      try {
        // شبیه‌سازی API
        const res = await fetch(`/api/articles/${slug}`)
        if (!res.ok) {
          setArticle(null)
          return
        }
        const data = await res.json()
        setArticle(data)
      } catch (err) {
        console.error("خطا در دریافت مقاله:", err)
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-gray-500 animate-pulse">در حال بارگذاری...</p>
      </div>
    )
  }

  if (!article) {
    return notFound()
  }

  return (
    <main className="container mx-auto py-10 px-4 md:px-8 lg:px-16">
      <article className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* تصویر خبر اگر وجود داشت */}
        {article.image && (
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        )}

        {/* متن خبر */}
        <div className="p-6 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 leading-snug">
            {article.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {new Date(article.date).toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </main>
  )
}
