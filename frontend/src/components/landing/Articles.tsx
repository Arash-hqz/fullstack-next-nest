import Link from "next/link"

export function Articles() {
  const articles = [
    { title: "آینده انرژی‌های تجدیدپذیر", date: "۱۴۰۴/۰۶/۱۰" },
    { title: "چگونه نیروگاه‌ها را بهینه کنیم", date: "۱۴۰۴/۰۵/۳۰" },
    { title: "۱۰ نوآوری برتر صنعتی", date: "۱۴۰۴/۰۵/۱۹" },
  ]

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">آخرین مقالات</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <Link
            href="/articles/[id]"
            as={`/articles/${i + 1}`}
            key={i}
            className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transition block text-right"
          >
            <p className="text-sm text-gray-500 mb-2">{a.date}</p>
            <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-blue-600 font-medium">مطالعه بیشتر ←</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

