import { FiStar, FiDownload, FiShare2 } from 'react-icons/fi'
import Link from 'next/link'

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    category: string
    features: string[]
    price: string
    image: string
    rating: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl opacity-20">
            {product.category === '云服务' ? '☁️' : 
             product.category === '数据分析' ? '📊' : '📱'}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
          <button className="bg-white p-2 rounded-full shadow">
            <FiShare2 />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition">
            {product.name}
          </h3>
          <div className="flex items-center text-yellow-500">
            <FiStar className="fill-current" />
            <span className="ml-1 font-medium">{product.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-secondary">{product.price}</span>
            {product.price !== '定制' && (
              <span className="text-gray-500 text-sm ml-1">/月</span>
            )}
          </div>
          <Link
            href={`/products/${product.id}`}
            className="btn-primary text-sm px-4 py-2"
          >
            了解详情
          </Link>
        </div>
      </div>
    </div>
  )
}