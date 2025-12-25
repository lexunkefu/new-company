import DownloadItem from '@/components/DownloadItem'
import { downloads } from '@/lib/data'
import { FiSearch, FiFilter, FiDownloadCloud, FiAlertCircle } from 'react-icons/fi'

export default function DownloadsPage() {
  const categories = ['全部', '客户端', '移动应用', '开发工具', '文档', '驱动程序']
  const platforms = ['Windows', 'macOS', 'iOS', 'Android', 'Linux', '跨平台']
  
  const totalSize = downloads.reduce((sum, item) => {
    const size = parseFloat(item.fileSize.replace(' MB', ''))
    return sum + size
  }, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="gradient-bg text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <FiDownloadCloud size={32} />
              <h1 className="heading-1">下载中心</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">
              获取最新版本的软件、驱动程序和文档资源
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="opacity-80">总下载量：</span>
                <span className="font-semibold">
                  {downloads.reduce((sum, item) => sum + item.downloads, 0).toLocaleString()}+
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="opacity-80">资源总量：</span>
                <span className="font-semibold">
                  {totalSize.toFixed(0)} MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="搜索下载资源..."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="btn-outline flex items-center gap-2">
                <FiFilter />
                筛选
              </button>
              
              <select className="input bg-white border-gray-200">
                <option>最新优先</option>
                <option>下载最多</option>
                <option>按名称排序</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    category === '全部'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Downloads List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">所有下载资源</h2>
            <span className="text-gray-500">
              共 {downloads.length} 个资源
            </span>
          </div>

          {downloads.map((item) => (
            <DownloadItem key={item.id} item={item} />
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex items-start gap-4">
            <FiAlertCircle className="text-blue-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                下载须知
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>请根据您的操作系统选择合适的版本下载</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>下载前请确保您的设备满足最低系统要求</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>安装前建议关闭杀毒软件，以免误报</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>遇到下载或安装问题，请查看客服中心的常见问题</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: '如何选择正确的版本？',
                answer: '请根据您的操作系统（Windows、macOS等）和系统位数（32位/64位）选择对应的版本。'
              },
              {
                question: '下载速度很慢怎么办？',
                answer: '建议尝试更换网络环境或使用下载工具。如问题持续，请联系技术支持。'
              },
              {
                question: '安装过程中报错如何处理？',
                answer: '请检查系统是否满足最低要求，关闭其他应用程序，并以管理员身份运行安装程序。'
              },
              {
                question: '如何卸载软件？',
                answer: '可通过控制面板的"程序和功能"或使用软件自带的卸载程序进行卸载。'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-sm transition-shadow">
                <h4 className="font-semibold mb-2 text-gray-800">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}