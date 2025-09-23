import Link from "next/link"

export function FinalCTA() {
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