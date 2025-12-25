'use client'

import ContactForm from '@/components/ContactForm'
import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageSquare, FiUsers } from 'react-icons/fi'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: '办公地址',
      details: [
        '北京市朝阳区科技园A座18层',
        '上海市浦东新区张江高科技园区',
        '深圳市南山区科技园南区'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiPhone,
      title: '联系电话',
      details: [
        '客服热线：400-123-4567',
        '技术支持：400-123-4568',
        '商务合作：400-123-4569'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiMail,
      title: '电子邮箱',
      details: [
        '一般咨询：contact@techcorp.com',
        '技术支持：support@techcorp.com',
        '商务合作：business@techcorp.com'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const departments = [
    {
      name: '客户支持',
      description: '产品使用问题和技术支持',
      contact: 'support@techcorp.com',
      hours: '9:00-21:00'
    },
    {
      name: '销售咨询',
      description: '产品购买和商务合作',
      contact: 'sales@techcorp.com',
      hours: '9:00-18:00'
    },
    {
      name: '市场合作',
      description: '品牌合作和市场活动',
      contact: 'marketing@techcorp.com',
      hours: '9:00-18:00'
    },
    {
      name: '人力资源',
      description: '招聘和人事咨询',
      contact: 'hr@techcorp.com',
      hours: '9:00-18:00'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="gradient-bg text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl">
            <h1 className="heading-1 mb-6">联系我们</h1>
            <p className="text-xl opacity-90 mb-8">
              我们期待与您沟通，无论您有任何问题、建议或合作意向，我们都将及时回复
            </p>
            
            <div className="flex flex-wrap gap-6">
              {[
                { label: '响应时间', value: '24小时内', icon: FiClock },
                { label: '支持语言', value: '中英文', icon: FiMessageSquare },
                { label: '服务客户', value: '5000+企业', icon: FiUsers }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <stat.icon className="opacity-80" />
                    <div>
                      <div className="text-lg font-bold">{stat.value}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
            
            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">常见问题</h2>
              <div className="space-y-4">
                {[
                  {
                    question: '一般咨询需要多久得到回复？',
                    answer: '我们会在24小时内回复所有咨询邮件。紧急问题请拨打客服热线。'
                  },
                  {
                    question: '技术支持的服务时间是什么？',
                    answer: '标准技术支持服务时间为工作日9:00-21:00，紧急支持7×24小时。'
                  },
                  {
                    question: '如何预约产品演示？',
                    answer: '您可以通过表单选择"产品咨询"主题，我们的销售团队会与您联系安排演示。'
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border hover:shadow-sm transition-shadow">
                    <h3 className="font-semibold mb-2 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm border p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                  <ul className="space-y-3">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">工作时间</h3>
              <div className="space-y-4">
                {[
                  { day: '周一至周五', time: '9:00 - 18:00', type: '工作日' },
                  { day: '周六', time: '10:00 - 17:00', type: '值班时间' },
                  { day: '周日及节假日', time: '休息', type: '休息日' },
                  { day: '紧急支持', time: '7×24小时', type: '随时响应' }
                ].map((schedule, index) => (
                  <div key={index} className="pb-3 border-b border-gray-700 last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium">{schedule.day}</div>
                      <div className="text-sm text-gray-300">{schedule.type}</div>
                    </div>
                    <div className="text-lg font-semibold">{schedule.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-6">各部门联系方式</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50 rounded-xl transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{dept.name}</h4>
                      <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {dept.hours}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="text-sm text-primary font-medium">{dept.contact}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <p className="text-gray-600 mb-4">
                获取最新产品动态和行业资讯
              </p>
              <div className="flex justify-center space-x-4">
                {[
                  { name: '微信', color: 'bg-green-500' },
                  { name: '微博', color: 'bg-red-500' },
                  { name: '领英', color: 'bg-blue-700' },
                  { name: '知乎', color: 'bg-blue-500' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity`}
                    title={social.name}
                  >
                    {social.name.charAt(0)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}