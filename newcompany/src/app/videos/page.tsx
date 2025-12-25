'use client'

import { useState } from 'react'
import VideoCard from '@/components/VideoCard'
import { videos } from '@/lib/data'
import { FiPlay, FiGrid, FiList, FiFilter, FiYoutube, FiTrendingUp, FiClock } from 'react-icons/fi'

export default function VideosPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('全部')
  
  const categories = ['全部', '产品介绍', '教程', '案例', '演示', '发布会', '客户评价']
  
  const videoStats = {
    totalVideos: videos.length,
    totalViews: videos.reduce((sum, video) => sum + video.views, 0),
    totalDuration: '6小时45分钟'
  }

  const featuredVideos = videos.slice(0, 2)
  const allVideos = videos

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <FiYoutube size={36} />
              <h1 className="heading-1">视频中心</h1>
            </div>
            <p className="text-xl opacity-90 mb-8">
              通过视频了解我们的产品、学习使用技巧、观看客户案例
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: '视频总数', value: videoStats.totalVideos, icon: FiPlay },
                { label: '累计观看', value: (videoStats.totalViews / 1000).toFixed(0) + 'K', icon: FiTrendingUp },
                { label: '总时长', value: videoStats.totalDuration, icon: FiClock }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <stat.icon className="opacity-80" />
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Videos */}
      {featuredVideos.length > 0 && (
        <div className="container-custom section-padding">
          <h2 className="text-3xl font-bold mb-8">精选视频</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-purple-500 to-pink-500">
                  {/* 播放按钮 */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <FiPlay className="text-black ml-1" size={28} />
                    </div>
                  </div>
                  
                  {/* 时长 */}
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1.5 rounded-lg">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <FiEye size={14} />
                        <span>{(video.views / 1000).toFixed(1)}K 观看</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {video.category}
                      </span>
                    </div>
                    <button className="btn-primary text-sm px-4 py-2">
                      立即观看
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Categories */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white border rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100 text-primary' : 'text-gray-400'}`}
              >
                <FiGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100 text-primary' : 'text-gray-400'}`}
              >
                <FiList size={18} />
              </button>
            </div>
            
            <select className="input bg-white border-gray-200">
              <option>最新视频</option>
              <option>最多观看</option>
              <option>时长最短</option>
              <option>时长最长</option>
            </select>
          </div>
        </div>

        {/* Video Grid */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">所有视频</h3>
            <span className="text-gray-500">
              共 {allVideos.length} 个视频
            </span>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allVideos.map((video) => (
                <VideoCard key={video.id} video={video} variant="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {allVideos.map((video) => (
                <VideoCard key={video.id} video={video} variant="list" />
              ))}
            </div>
          )}
        </div>

        {/* Video Categories Info */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">视频分类说明</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '产品介绍',
                description: '了解产品功能、特性和优势',
                color: 'from-blue-500 to-blue-600',
                count: '15个视频'
              },
              {
                title: '使用教程',
                description: '手把手教你如何使用各项功能',
                color: 'from-green-500 to-green-600',
                count: '28个视频'
              },
              {
                title: '客户案例',
                description: '真实客户的成功故事和使用体验',
                color: 'from-purple-500 to-purple-600',
                count: '12个视频'
              }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <FiPlay className="text-white" size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{category.title}</h4>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{category.count}</span>
                  <button className="text-primary font-medium hover:underline text-sm">
                    查看全部
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">想要更多视频内容？</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            订阅我们的YouTube频道，第一时间获取最新视频教程和产品更新
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
              <FiYoutube size={20} />
              订阅YouTube频道
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold">
              提交视频建议
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}