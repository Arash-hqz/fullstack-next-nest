import Link from "next/link"
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#d1d1d1]  shadow-[0_-4px_6px_-1px_rgba(185,28,28,0.5)] shadow-red-800 text-[#1a1a1a]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 px-6">
        
        {/* درباره ما */}
        <div>
          <h3 className="font-bold mb-4 text-lg">درباره ما</h3>
          <p className="text-sm text-neutral-600 leading-6">
            ما یک گروه مهندسی و پیمانکاری حرفه‌ای هستیم که در حوزه طراحی، مشاوره و اجرای پروژه‌های انرژی و زیرساخت فعالیت می‌کنیم.
          </p>
        </div>

        {/* خدمات */}
        <div>
          <h3 className="font-bold mb-4 text-lg">خدمات</h3>
          <ul className="space-y-2 text-neutral-600">
            <li><Link className="hover:text-red-600" href="/services/design">طراحی</Link></li>
            <li><Link className="hover:text-red-600" href="/services/construction">ساخت و اجرا</Link></li>
            <li><Link className="hover:text-red-600" href="/services/consulting">مشاوره</Link></li>
          </ul>
        </div>

        {/* پروژه‌ها */}
        <div>
          <h3 className="font-bold mb-4 text-lg">پروژه‌ها</h3>
          <ul className="space-y-2 text-neutral-600">
            <li><Link className="hover:text-red-600" href="/projects/energy">انرژی</Link></li>
            <li><Link className="hover:text-red-600" href="/projects/infrastructure">زیرساخت</Link></li>
            <li><Link className="hover:text-red-600" href="/projects/sustainability">پایداری</Link></li>
          </ul>
        </div>

        {/* تماس با ما */}
        <div>
          <h3 className="font-bold mb-4 text-lg">تماس با ما</h3>
          <p className="flex items-center gap-2 text-sm text-neutral-600">
            <Mail size={16} className="text-red-600" /> info@company.com
          </p>
          <p className="flex items-center gap-2 text-sm text-neutral-600 mt-2">
            <Phone size={16} className="text-red-600" /> +98 912 123 4567
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-red-600 transition">
              <Linkedin size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-red-600 transition">
              <Instagram size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-red-600 transition">
              <Twitter size={20} />
            </Link>
          </div>
        </div>

      </div>
      <div className="text-center py-4 border-t border-neutral-200 text-neutral-500 text-sm">
        © ۲۰۲۵ شرکت ما. تمامی حقوق محفوظ است.
      </div>
    </footer>
  )
}

