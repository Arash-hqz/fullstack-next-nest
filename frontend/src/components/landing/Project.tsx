import Image from "next/image"

export function Projects() {
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
