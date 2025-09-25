import { Button } from "@/components/ui/buttons/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* پس‌زمینه تصویری */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-industrial.jpg"
          alt="نیروگاه صنعتی"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-[#f59292]" /> {/* لایه تیره */}
      </div>

      <div className="container mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          ساخت نیروگاه و پروژه‌های صنعتی <br /> با بهترین کیفیت
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl">
          ما از صفر تا صد پروژه‌های برق و انرژی را طراحی و اجرا می‌کنیم. 
          تجربه ما در صنعت، تضمین موفقیت پروژه شماست.
        </p>
        <div className="flex gap-4">
          <Button size="lg">مشاهده خدمات</Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-red-800">
            تماس با ما
          </Button>
        </div>
      </div>
    </section>
  )
}
