import Link from 'next/link'
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const footerLinks = {
  产品: [
    { name: '产品展示', href: '/products/' },
    { name: '产品特性', href: '/products/#features' },
    { name: '价格方案', href: '/products/#pricing' },
    { name: '客户案例', href: '/products/#cases' },
  ],
  支持: [
    { name: '下载中心', href: '/downloads/' },
    { name: '客服中心', href: '/support/' },
    { name: '文档中心', href: '/support/docs' },
    { name: '常见问题', href: '/support/faq' },
  ],
  公司: [
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact/' },
    { name: '加入我们', href: '/careers' },
    { name: '新闻动态', href: '/news' },
  ],
  资源: [
    { name: '视频中心', href: '/videos/' },
    { name: '博客', href: '/blog' },
    { name: '白皮书', href: '/whitepapers' },
    { name: '活动', href: '/events' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">TC</span>
              </div>
              <span className="text-2xl font-bold">TechCorp</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              我们致力于为企业提供创新的科技解决方案，助力数字化转型，提升业务效率。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <FiPhone className="text-primary" size={20} />
              <span className="text-gray-400">400-123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-primary" size={20} />
              <span className="text-gray-400">contact@techcorp.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-primary" size={20} />
              <span className="text-gray-400">北京市朝阳区科技园A座</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechCorp. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}