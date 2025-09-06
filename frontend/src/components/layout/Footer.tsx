import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
        
        {/* About */}
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <p className="text-sm text-neutral-400">
            Leading engineering and consulting firm delivering solutions in energy and infrastructure.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><Link className="hover:text-red-500" href="/services">Design</Link></li>
            <li><Link className="hover:text-red-500" href="/services">Construction</Link></li>
            <li><Link className="hover:text-red-500" href="/services">Consulting</Link></li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-bold mb-4">Projects</h3>
          <ul className="space-y-2 text-neutral-400">
            <li><Link className="hover:text-red-500" href="/projects">Energy</Link></li>
            <li><Link className="hover:text-red-500" href="/projects">Infrastructure</Link></li>
            <li><Link className="hover:text-red-500" href="/projects">Sustainability</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <p className="text-sm text-neutral-400">Email: info@company.com</p>
          <p className="text-sm text-neutral-400">Phone: +27 123 456 789</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500">🌐</a>
            <a href="#" className="hover:text-red-500">📘</a>
            <a href="#" className="hover:text-red-500">🔗</a>
          </div>
        </div>

      </div>
      <div className="text-center py-4 border-t border-neutral-800 text-neutral-500 text-sm">
        © 2025 Company Name. All rights reserved.
      </div>
    </footer>
  )
}

