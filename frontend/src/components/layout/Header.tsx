import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Company Logo" width={120} height={40} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/projects" className="hover:text-red-600 transition">Projects</Link>
          <Link href="/articles" className="hover:text-red-600 transition">Insights</Link>
          <Link href="/about" className="hover:text-red-600 transition">About</Link>
          <Link href="/pricing" className="hover:text-red-600 transition">Pricing</Link>
        </nav>

        {/* Search / Language */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-red-600">🔍</button>
          <button className="text-gray-600 hover:text-red-600">EN</button>
        </div>
      </div>
    </header>
  )
}
