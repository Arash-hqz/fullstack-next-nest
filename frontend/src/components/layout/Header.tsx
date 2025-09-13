"use client"
import Link from "next/link"
import Image from "next/image"
import { use, useState } from "react"

export function Header() {
   const [openMenu, setOpenMenu] = useState<string | null>(null)
  return (
     <header className="bg-white shadow-md sticky top-0 z-50 h-[85px]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <Link href="/" className="relative right-8">
          <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-neutral-700 font-medium relative right-[250px]">
          {[
            { title: "Services", href: "/services", submenu: [
              { label: "Design", href: "/services/design", desc: "Industrial design" },
              { label: "Installation", href: "/services/install", desc: "Full setup" }
            ] },
            { title: "Projects", href: "/projects", submenu: [
              { label: "Project A", href: "/projects/1" },
              { label: "Project B", href: "/projects/2" }
            ] },
            { title: "Insights", href: "/articles" }
          ].map((item) => (
            <div
              key={item.title}
              className="relative group"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* main link */}
              <Link
                href={item.href}
                className="hover:text-red-600 transition relative"
              >
                {item.title}
                <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* dropdown */}
              {item.submenu && openMenu === item.title && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block p-2 hover:bg-neutral-100 rounded-md"
                    >
                      <p className="font-medium text-sm text-neutral-800">{sub.label}</p>
                      {sub.desc && <p className="text-xs text-neutral-500">{sub.desc}</p>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search / Language */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="hover:text-red-600 transition relative group">
              About
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/pricing" className="hover:text-red-600 transition relative group">
              Pricing
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <button className="text-gray-600 hover:text-red-600">🔍</button>
          <button className="text-gray-600 hover:text-red-600">EN</button>
        </div>
      </div>
    </header>
  )
}
