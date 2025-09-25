import { navItems } from "@/lib/navItems"
import { useState } from "react"
import Link from "next/link"


export function Navbar() {
      const [openMenu, setOpenMenu] = useState<string | null>(null)
    
  return (
   <nav className="hidden lg:flex  gap-8 text-neutral-700 font-medium relative top-[15px] left-[103px]">
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
  )
}