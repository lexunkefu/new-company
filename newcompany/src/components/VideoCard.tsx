'use client'

import { useState } from 'react'
import { FiPlay, FiEye, FiClock, FiThumbsUp, FiShare2, FiDownload } from 'react-icons/fi'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

interface VideoCardProps {
  video: {
    id: number
    title: string
    description: string
    duration: string
    views: number
    likes?: number
    thumbnail: string
    category: string
    url: string
    uploadDate?: string
    tags?: string[]
  }
  variant?: 'grid' | 'list'
}

export default function VideoCard({ video, variant = 'grid' }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`
    }
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const formatDuration = (duration: string) => {
    const [minutes, seconds] = duration.split(':').map(Number)
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60)
      const remainingMinutes = minutes % 60
      return `${hours}:${remainingMinutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }
    return duration
  }

  const handlePlay = () => {
    setIsPlaying(true)
    // 在实际应用中，这里会打开视频播放器或模态框
    window.open(video.url, '_blank')
  }

  if (variant === 'list') {
    return (
      <div 
        className="flex items-start gap-4 p-4 rounded-xl border hover:shadow-md transition-all duration-300 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlay}
      >
        {/* 缩略图容器 */}
        <div className="relative flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100" />
          
          {/* 视频时长 */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {formatDuration(video.duration)}
          </div>
          
          {/* 播放按钮 */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FiPlay className="text-black ml-1" size={24} />
            </div>
          </div>
        </div>

        {/* 视频信息 */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {video.title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {video.description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FiEye size={14} />
              <span>{formatViews(video.views)} 次观看</span>
            </div>
            
            <div className="flex items-center gap-1">
              <FiClock size={14} />
              <span>{formatDuration(video.duration)}</span>
            </div>
            
            {video.likes && (
              <div className="flex items-center gap-1">
                <FiThumbsUp size={14} />
                <span>{formatViews(video.likes)}</span>
              </div>
            )}
            
            {video.uploadDate && (
              <span>
                {format(new Date(video.uploadDate), 'yyyy年MM月dd日', { locale: zhCN })}
              </span>
            )}
          </div>
          
          {/* 标签 */}
          {video.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                {video.category}
              </span>
              {video.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        <div className="flex-shrink-0 flex flex-col gap-2">
          <button 
            className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation()
              // 分享功能
              navigator.share?.({
                title: video.title,
                text: video.description,
                url: video.url
              })
            }}
          >
            <FiShare2 size={18} />
          </button>
          <button 
            className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation()
              // 下载功能
            }}
          >
            <FiDownload size={18} />
          </button>
        </div>
      </div>
    )
  }

  // 网格布局（默认）
  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlay}
    >
      {/* 缩略图容器 */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-blue-100 to-purple-100">
        {/* 播放按钮 */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
            <FiPlay className="text-black ml-1" size={24} />
          </div>
        </div>
        
        {/* 视频时长 */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {formatDuration(video.duration)}
        </div>
        
        {/* 视频类型标签 */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white text-xs px-3 py-1.5 rounded-full">
            {video.category}
          </span>
        </div>
      </div>

      {/* 视频信息 */}
      <div>
        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FiEye size={14} />
              <span>{formatViews(video.views)} 次</span>
            </div>
            
            <div className="flex items-center gap-1">
              <FiClock size={14} />
              <span>{video.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                // 分享功能
              }}
            >
              <FiShare2 size={14} />
            </button>
            <button 
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                // 收藏功能
              }}
            >
              <FiThumbsUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}