import Link from "next/link"
 export function Articles() {
  const articles = [
    { title: "Future of Renewable Energy", date: "2025-09-01" },
    { title: "How to Optimize Power Plants", date: "2025-08-21" },
    { title: "Top 10 Industrial Innovations", date: "2025-08-10" },
  ]

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <Link
            href="/articles/[id]"
            as={`/articles/${i + 1}`}
            key={i}
            className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transition block"
          >
            <p className="text-sm text-gray-500 mb-2">{a.date}</p>
            <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-red-600 font-medium">Read More →</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
