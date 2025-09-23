"use client"
import Link from "next/link"
import Image from "next/image"
import { use, useState } from "react"
import { SearchBar } from "../shared/searchBar"
import { Menu, X } from "lucide-react" 


export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  
   const navItems = [
   {
      title: " محصولات ",
      href: "/products",
      submenu: [{ label: " محصولات ما ",href: "" , desc: "" }  ],
    },
    {
      title: "سرویس ها",
      href: "/services",
      submenu: [{ label: " سرویس ها و خدماتی ک ما ارائه میدیم به شما ",href: "" , desc: "" }  ],
    },
    {
      title: "پروژه ها",
      href: "/projects",
      submenu: [{ label: "نمونه پروژه های انجام شده", href: "" , desc: "" }],
    },
    {
      title: "آخرین اخبار",
      href: "/articles",
      submenu: [{ label: "اخبار و حواشی صنعت و تکنولوژی", href: "" , desc: "" }],
    },
    {
      title: "محاسبات",
      href: "/pricing",
      submenu: [{ label: "محاسبات و برآورد هزینه‌ها", href: "" , desc: "" }],
    },
    {
      title: "درباره ما",
      href: "/about",
      submenu: [{ label: "ما گروهی حرفه ای از مهندسین و پیمانکاران هستیم برای اراِه محصولات صنعتی و ساخت نیروگاه برقی از صفر تا صد ", href: "" , desc: "" }],
    },
  ]

  return (
     <header dir="ltr" className="bg-[#f0f0f0] shadow-md shadow-red-800 sticky top-0 z-50 h-[85px] ">
      <div className=" relative mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link href="/" className="relative right-[-36px] max-sm:right-1 w-16 ">
          <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex  gap-8 text-neutral-700 font-medium relative top-[15px]">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative group h-[45px] flex flex-wrap"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {/* main link */}
              <Link
                href={item.href}
                className="hover:text-red-600 transition relative"
              >
                {item.title}
                <span className="absolute left-0 -bottom-[9px] h-[10%] w-0 bg-red-600 transition-all duration-300 group-hover:w-[111%]"></span>
              </Link>

              {/* dropdown */}
              <div
                dir="rtl"
                className={`absolute top-full left-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-4 z-50
                transition-all duration-300 origin-top
                ${openMenu === item.title 
                  ? "opacity-100 scale-y-100 translate-y-0 visible" 
                  : "opacity-0 scale-y-0 -translate-y-2 invisible"
                }`}
              >
                {item.submenu?.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.href}
                    className="block p-2 hover:bg-neutral-100 border-[#f4482aa4] border-2 rounded-xl"
                  >
                    <p className="font-medium text-sm text-neutral-800 ">{sub.label}</p>
                    {sub.desc && <p className="text-xs text-neutral-500">{sub.desc}</p>}
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </nav>

        

        {/* Search / Language */}

        

        <div dir="rtl" className="flex items-center gap-3 w-[20%] relative right-[36px] max-xl:right-2 ">
          {/* دکمه همبرگر برای موبایل */}
          <button
            className=" lg:hidden text-gray-700 cursor-pointer transition-transform duration-300   bg-[#f0f0f0]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={28} className="hover:rotate-180 transition-transform duration-300" />
            ) : (
              <Menu size={28} className="hover:rotate-90 transition-transform duration-300" />
            )}
          </button>
          <button className="text-gray-600 hover:text-red-600 max-lg:hidden">EN</button>
          <SearchBar />
        </div>
        {/* بک‌دراپ */}
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
            <Link
              key={item.title}
              href={item.href}
              className="p-2 rounded-md hover:bg-gray-100 transition-transform "
            >
              {item.title}
              {item.submenu?.map((sub, idx) => (
                <div 
                  className=" p-2 border-[#f4482aa4] border-2 rounded-xl"
                  key={idx}
                >
                  <p className="font-medium text-sm text-neutral-800 ">{sub.label}</p>
                  {sub.desc && <p className="text-xs text-neutral-500">{sub.desc}</p>}
                </div>
              ))}
            </Link>
          ))}
        </div>


      </div>
    </header>
  )
}
