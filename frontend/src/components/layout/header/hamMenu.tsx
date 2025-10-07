import { navItems } from "@/lib/navItems"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function HamMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* دکمه همبرگر */}
      <button
        className="lg:hidden text-gray-700 cursor-pointer transition-transform duration-300 bg-[#d1d1d1] max-sm:relative left-6"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <X
            size={28}
            className="hover:rotate-180 transition-transform duration-300"
          />
        ) : (
          <Menu
            size={28}
            className="hover:rotate-90 transition-transform duration-300"
          />
        )}
      </button>

      {/* پس‌زمینه تار */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* منوی موبایل */}
      <div
        dir="rtl"
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-4
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {navItems.map((item) => (
          <div key={item.title} className="mb-2">
            {/* لینک اصلی */}
            <Link
              href={item.href}
              className="block p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>

            {/* زیرمنوها */}
            {item.submenu?.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                className="block p-2 border border-red-400 rounded-xl text-sm text-neutral-800 hover:bg-neutral-100"
                onClick={() => setMobileOpen(false)}
              >
                <p className="font-medium">{sub.label}</p>
                {sub.desc && (
                  <p className="text-xs text-neutral-500">{sub.desc}</p>
                )}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
