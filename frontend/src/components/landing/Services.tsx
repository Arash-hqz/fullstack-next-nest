export function Services() {
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