"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <section className="container mx-auto px-6 py-20">
      {/* هدر */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">درباره ما</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ما گروهی از مهندسین، پیمانکاران و متخصصان هستیم که از طراحی تا نصب و نگهداری 
          پروژه‌های صنعتی و نیروگاهی در کنار شما خواهیم بود.
        </p>
      </div>

      {/* بخش اصلی */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* تصویر */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/about-team.jpg"
            alt="تیم ما"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        </motion.div>

        {/* متن */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">ماموریت ما</h2>
          <p className="text-gray-600 leading-relaxed">
            هدف ما ارائه راهکارهای نوین، پایدار و اقتصادی در حوزه انرژی و صنعت است.
            ما تلاش می‌کنیم با بهره‌گیری از تخصص تیم و فناوری روز دنیا، 
            پروژه‌هایی ارزشمند و کارآمد برای مشتریان خود بسازیم.
          </p>
          <h2 className="text-2xl font-semibold">چشم‌انداز ما</h2>
          <p className="text-gray-600 leading-relaxed">
            تبدیل شدن به یکی از پیشگامان صنعت انرژی در سطح منطقه 
            با تمرکز بر نوآوری، کیفیت و رضایت مشتری.
          </p>
        </motion.div>
      </div>

      {/* بخش ویژگی‌ها */}
      <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
        {[
          { title: "۱۰+ سال تجربه", desc: "پروژه‌های موفق در حوزه انرژی و صنعت" },
          { title: "۵۰+ پروژه", desc: "در ایران و خارج از کشور" },
          { title: "تیم متخصص", desc: "مهندسین و کارشناسان حرفه‌ای" },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
