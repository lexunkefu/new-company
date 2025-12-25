import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/data'
import { FiFilter, FiGrid, FiList } from 'react-icons/fi'

export default function ProductsPage() {
  const categories = ['全部', '云服务', '数据分析', '移动应用', 'CRM']

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="gradient-bg text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">产品展示</h1>
            <p className="text-xl opacity-90">
              探索我们全面的产品线，每一款产品都经过精心设计，旨在解决您业务中的特定挑战
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom section-padding">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600">
              <FiFilter className="mr-2" />
              筛选
            </button>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${category === '全部' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-white rounded-lg">
              <FiGrid />
            </button>
            <button className="p-2 bg-gray-200 rounded-lg">
              <FiList />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">产品特性</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '易于集成',
                description: '提供开放的API和详细的文档，轻松与现有系统集成',
                icon: '🔌',
              },
              {
                title: '可扩展架构',
                description: '支持从小型企业到大型企业的各种规模部署',
                icon: '📈',
              },
              {
                title: '数据驱动',
                description: '基于数据分析提供智能洞察和决策支持',
                icon: '📊',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">需要定制化解决方案？</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            我们的专业团队可以根据您的特定需求，提供定制化的产品解决方案
          </p>
          <button className="btn-primary">
            联系销售团队
          </button>
        </div>
      </div>
    </div>
  )
}