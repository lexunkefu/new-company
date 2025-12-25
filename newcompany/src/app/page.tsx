import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiDownload, FiPlayCircle, FiMessageSquare } from 'react-icons/fi'
import ProductCard from '@/components/ProductCard'
import { products, downloads, videos } from '@/lib/data'

export default function Home() {
  const featuredProducts = products.slice(0, 3)
  const featuredDownloads = downloads.slice(0, 3)
  const featuredVideos = videos.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              创新科技
              <span className="block text-accent">驱动业务增长</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              为企业提供全面的数字化转型解决方案，从云服务到数据分析，一站式满足您的业务需求
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/" className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                查看产品 <FiArrowRight className="ml-2" />
              </Link>
              <Link href="/contact/" className="bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition duration-300">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们提供业界领先的技术解决方案和卓越的客户服务
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '企业级安全',
                description: '银行级别数据加密和多重安全防护',
                icon: '🔒',
              },
              {
                title: '24/7 技术支持',
                description: '全天候技术支持和客户服务',
                icon: '🛠️',
              },
              {
                title: '99.9% 可用性',
                description: '高可用架构确保业务连续运行',
                icon: '⚡',
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="container-custom section-padding">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">热门产品</h2>
              <p className="text-gray-600">探索我们最受欢迎的产品解决方案</p>
            </div>
            <Link href="/products/" className="text-primary hover:underline font-medium flex items-center">
              查看全部 <FiArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            加入数千家已经选择 TechCorp 的企业，开始您的数字化转型之旅
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary bg-accent hover:bg-green-500">
              获取报价
            </Link>
            <Link href="/support/" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition duration-300">
              预约演示
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/downloads/" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <FiDownload className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-semibold group-hover:text-primary transition">下载中心</h3>
                </div>
                <p className="text-gray-600 mb-4">获取最新版本的软件、驱动和文档</p>
                <span className="text-primary font-medium group-hover:underline">
                  立即下载 →
                </span>
              </div>
            </Link>

            <Link href="/videos/" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <FiPlayCircle className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-semibold group-hover:text-primary transition">视频中心</h3>
                </div>
                <p className="text-gray-600 mb-4">观看产品演示、教程和客户案例</p>
                <span className="text-primary font-medium group-hover:underline">
                  观看视频 →
                </span>
              </div>
            </Link>

            <Link href="/support/" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
                <div className="flex items-center mb-4">
                  <FiMessageSquare className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-semibold group-hover:text-primary transition">客服中心</h3>
                </div>
                <p className="text-gray-600 mb-4">获取技术支持、查看文档和常见问题</p>
                <span className="text-primary font-medium group-hover:underline">
                  获取帮助 →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}