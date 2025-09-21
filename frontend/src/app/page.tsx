"use client"
import Image from "next/image"
import { IMAGES } from "@/lib/images"
import Link from "next/link"



// Hero Section
function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white rounded-xl overflow-hidden mx-6 md:mx-0">
      <Image
        src={IMAGES.hero }
        alt="Hero background"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 text-center max-w-2xl px-4 rou">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          انرژی پایدار برای آینده‌ای روشن
        </h1>
        <p className="text-lg md:text-xl mb-8">
          راهکارهای نوآورانه برای نیروگاه‌ها و پروژه‌های صنعتی.
        </p>
        <Link
          href="/services"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition"
        >
          شروع همکاری
        </Link>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    { title: "Design", desc: "Industrial design and consulting", icon: "⚙️" },
    { title: "Installation", desc: "Turn-key installation of plants", icon: "🏗️" },
    { title: "Maintenance", desc: "Long-term support and operations", icon: "🛠️" },
  ]

  return (
    <section className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Projects Section
function Projects() {
  const projects = [
    { title: "Power Plant Alpha", img: "/images/project1.jpg" },
    { title: "Solar Farm Beta", img: "/images/project2.jpg" },
    { title: "Hydro Plant Gamma", img: "/images/project3.jpg" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={250}
                className="object-cover w-full h-64 group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                {p.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Articles Section
function Articles() {
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

// Final CTA
function FinalCTA() {
  return (
    <section className="bg-red-600 text-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Start Your Project?
      </h2>
      <p className="mb-8 text-lg">
        Let’s build the future of sustainable energy together.
      </p>
      <Link
        href="/contact"
        className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Articles />
      <FinalCTA />
    </>
  )
}
