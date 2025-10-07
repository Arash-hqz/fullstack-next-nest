
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Sun, Moon, LogOut, Home, FileText, Box, Activity, Users } from 'lucide-react'
import { useTheme } from '../../../hooks/useTheme'

export function AdminLayout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col">
        <div className="px-6 py-6 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700">
          <div className="rounded-md bg-red-600 w-10 h-10 flex items-center justify-center text-white font-bold">F</div>
          <div>
            <div className="font-bold">Fatahi Admin</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Admin Panel</div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-auto">
          <NavItem href="/admin" icon={<Home size={18} />} label="داشبورد" />
          <NavItem href="/admin/articles" icon={<FileText size={18} />} label="مقالات" />
          <NavItem href="/admin/projects" icon={<Activity size={18} />} label="پروژه‌ها" />
          <NavItem href="/admin/products" icon={<Box size={18} />} label="محصولات" />
          <NavItem href="/admin/users" icon={<Users size={18} />} label="کاربران" />
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <button onClick={toggle} className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="text-sm">{theme === 'dark' ? 'روشن' : 'تاریک'}</span>
          </button>
          <Link href="/" className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-red-600">
            <LogOut size={16} /> خروج به سایت
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              {/* small-screen: show minimal nav */}
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">☰</button>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">مدیریت سامانه</div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/admin/profile" className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">A</div>
              <div className="text-sm">ادمین</div>
            </Link>
          </div>
        </header>

        {/* Content area */}
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
      <span className="text-gray-500 dark:text-gray-300">{icon}</span>
      <span>{label}</span>
    </Link>
  )
}


