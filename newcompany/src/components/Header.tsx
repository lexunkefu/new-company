'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const navigation = [
  { name: '首页', href: '/' },
  { name: '产品展示', href: '/products/' },
  { name: '下载中心', href: '/downloads/' },
  { name: '客服中心', href: '/support/' },
  { name: '视频中心', href: '/videos/' },
  { name: '联系我们', href: '/contact/' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom section-padding">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TC</span>
            </div>
            <span className="text-2xl font-bold text-secondary">TechCorp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">
              免费试用
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">
                免费试用
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}