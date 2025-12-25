'use client'

import { useState } from 'react'
import { faqs } from '@/lib/data'
import { FiSearch, FiMessageSquare, FiPhone, FiMail, FiHelpCircle, FiBookOpen, FiUsers, FiChevronDown } from 'react-icons/fi'

export default function SupportPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const supportCategories = [
    {
      icon: FiBookOpen,
      title: '文档中心',
      description: '产品使用指南和API文档',
      count: '120+',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiHelpCircle,
      title: '常见问题',
      description: '常见问题解答',
      count: '85',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiMessageSquare,
      title: '在线客服',
      description: '实时在线技术支持',
      count: '24/7',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiUsers,
      title: '社区论坛',
      description: '与其他用户交流',
      count: '2K+',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const contactMethods = [
    {
      icon: FiPhone,
      title: '电话支持',
      description: '400-123-4567',
      subtext: '周一至周五 9:00-18:00',
      action: '拨打'
    },
    {
      icon: FiMail,
      title: '邮件支持',
      description: 'support@techcorp.com',
      subtext: '24小时内回复',
      action: '发送邮件'
    },
    {
      icon: FiMessageSquare,
      title: '在线聊天',
      description: '实时在线沟通',
      subtext: '立即开始对话',
      action: '开始聊天'
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">客服中心</h1>
            <p className="text-xl opacity-90 mb-8">
              我们在这里为您提供帮助，多种支持渠道，快速解决您的问题
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="搜索问题或关键词..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Categories */}
      <div className="container-custom -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-800">{category.count}</span>
                <span className="text-primary font-medium group-hover:underline">
                  进入 →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - FAQ */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">常见问题解答</h2>
              <span className="text-gray-500">
                找到 {filteredFaqs.length} 个相关问题
              </span>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border hover:shadow-sm transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl"
                  >
                    <div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold inline">{faq.question}</h3>
                    </div>
                    <FiChevronDown
                      className={`transform transition-transform ${activeFaq === faq.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {activeFaq === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t">
                        <p className="text-gray-600">{faq.answer}</p>
                        <div className="mt-4 flex gap-2">
                          <button className="text-sm text-primary hover:underline">
                            有帮助
                          </button>
                          <button className="text-sm text-gray-500 hover:underline">
                            反馈问题
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHelpCircle className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">未找到相关问题</h3>
                <p className="text-gray-600 mb-6">
                  尝试使用其他关键词搜索，或直接联系我们获取帮助
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn-primary"
                >
                  查看所有问题
                </button>
              </div>
            )}

            {/* Popular Topics */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">热门主题</h3>
              <div className="flex flex-wrap gap-3">
                {['安装问题', '账户管理', '支付问题', '功能使用', '数据迁移', 'API集成'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSearchQuery(topic)}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Methods */}
          <div>
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">
                <h3 className="text-xl font-semibold mb-6">联系我们</h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="text-blue-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-gray-800 font-medium">{method.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{method.subtext}</p>
                      </div>
                      <button className="btn-outline text-sm px-4 py-2 whitespace-nowrap">
                        {method.action}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">支持时间</h3>
                <div className="space-y-3">
                  {[
                    { day: '周一至周五', time: '9:00 - 18:00', type: '标准支持' },
                    { day: '周末及节假日', time: '10:00 - 17:00', type: '有限支持' },
                    { day: '紧急情况', time: '7×24小时', type: '紧急支持' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-700 last:border-0">
                      <div>
                        <div className="font-medium">{schedule.day}</div>
                        <div className="text-sm text-gray-300">{schedule.type}</div>
                      </div>
                      <div className="text-lg font-semibold">{schedule.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="text-xl font-semibold mb-4">快速链接</h3>
                <div className="space-y-3">
                  {[
                    { text: '服务状态', href: '/status' },
                    { text: '服务协议', href: '/terms' },
                    { text: '隐私政策', href: '/privacy' },
                    { text: '提交工单', href: '/tickets' },
                    { text: '知识库', href: '/knowledge-base' }
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-primary">{link.text}</span>
                      <span className="text-gray-400 group-hover:text-primary">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}