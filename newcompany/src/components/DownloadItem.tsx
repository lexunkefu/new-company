'use client'

import { useState } from 'react'
import { FiDownload, FiFile, FiCheck, FiClock, FiInfo } from 'react-icons/fi'

interface DownloadItemProps {
  item: {
    id: number
    title: string
    description: string
    version?: string
    fileSize: string
    downloads: number
    updatedAt: string
    category: string
    platform: string[]
    url: string
    fileType?: string
  }
}

export default function DownloadItem({ item }: DownloadItemProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  const handleDownload = async () => {
    if (isDownloading || downloadComplete) return

    setIsDownloading(true)
    
    // 模拟下载过程
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // 创建虚拟下载
    const link = document.createElement('a')
    link.href = item.url
    link.download = `${item.title.replace(/\s+/g, '-')}-v${item.version || '1.0.0'}.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setDownloadComplete(true)
    setIsDownloading(false)
    
    // 3秒后重置状态
    setTimeout(() => setDownloadComplete(false), 3000)
  }

  const getFileIcon = () => {
    const fileType = item.fileType || item.title.toLowerCase()
    if (fileType.includes('pdf')) return '📄'
    if (fileType.includes('zip') || fileType.includes('rar')) return '📦'
    if (fileType.includes('exe') || fileType.includes('msi')) return '⚙️'
    if (fileType.includes('dmg')) return '💿'
    if (fileType.includes('apk')) return '📱'
    return '📄'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="card hover:shadow-md transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-2xl">
              {getFileIcon()}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                {item.version && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                    v{item.version}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center text-xs text-gray-500">
                  <FiFile className="mr-1" size={12} />
                  <span>{item.fileSize}</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500">
                  <FiDownload className="mr-1" size={12} />
                  <span>{item.downloads.toLocaleString()} 次下载</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500">
                  <FiClock className="mr-1" size={12} />
                  <span>更新于 {formatDate(item.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-4">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`
                flex items-center justify-center px-4 py-2 rounded-lg font-medium
                transition-all duration-300 min-w-[120px]
                ${downloadComplete 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : isDownloading 
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                    : 'btn-primary'
                }
              `}
            >
              {downloadComplete ? (
                <>
                  <FiCheck className="mr-2" />
                  下载完成
                </>
              ) : isDownloading ? (
                <>
                  <div className="loading-spinner mr-2" />
                  下载中...
                </>
              ) : (
                <>
                  <FiDownload className="mr-2" />
                  立即下载
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
            {item.category}
          </span>
          
          {item.platform.map((platform, index) => (
            <span
              key={index}
              className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100"
            >
              {platform}
            </span>
          ))}
          
          <button 
            className="ml-auto text-gray-400 hover:text-gray-600 transition-colors p-1"
            title="文件信息"
          >
            <FiInfo size={16} />
          </button>
        </div>
        
        {/* 下载进度条（仅下载时显示） */}
        {isDownloading && (
          <div className="mt-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full animate-pulse"
                style={{ width: '70%' }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>下载中...</span>
              <span>70%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}