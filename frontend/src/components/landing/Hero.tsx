import Image from "next/image"
import { IMAGES } from "@/lib/images"
import Link from "next/link"

export function Hero() {
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