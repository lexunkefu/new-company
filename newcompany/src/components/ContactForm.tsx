'use client'

import { useState } from 'react'
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  privacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  privacy?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '产品咨询',
    message: '',
    privacy: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const subjects = [
    '产品咨询',
    '技术支持',
    '商务合作',
    '投诉建议',
    '其他问题'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名'
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }

    if (formData.phone && !/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码'
    }

    if (!formData.message.trim()) {
      newErrors.message = '请输入您的留言内容'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '留言内容至少需要10个字符'
    }

    if (!formData.privacy) {
      newErrors.privacy = '请阅读并同意隐私政策'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 在实际应用中，这里会发送数据到服务器
      console.log('表单数据:', formData)
      
      // 显示成功状态
      setIsSuccess(true)
      
      // 重置表单
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '产品咨询',
          message: '',
          privacy: false
        })
        setIsSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('提交失败:', error)
      alert('提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // 清除对应字段的错误
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setFormData(prev => ({
      ...prev,
      privacy: checked
    }))
    
    if (errors.privacy) {
      setErrors(prev => ({
        ...prev,
        privacy: undefined
      }))
    }
  }

  if (isSuccess) {
    return (
      <div className="card text-center py-12">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <FiCheckCircle className="text-green-600" size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-3">提交成功！</h3>
          <p className="text-gray-600 mb-6">
            我们已经收到您的消息，会在24小时内与您联系。
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="btn-primary"
          >
            继续提交
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">发送消息</h3>
        <p className="card-description">
          填写以下表单，我们的团队会尽快与您联系
        </p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="card-content space-y-6">
          {/* 个人信息行 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="label mb-2 flex items-center">
                <FiUser className="mr-2" size={14} />
                姓名 *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className={`input ${errors.name ? 'border-red-500' : ''}`}
                placeholder="请输入您的姓名"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="label mb-2 flex items-center">
                <FiMail className="mr-2" size={14} />
                邮箱 *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          
          {/* 联系信息行 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="label mb-2 flex items-center">
                <FiPhone className="mr-2" size={14} />
                手机号码
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={`input ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="13800138000"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="company" className="label mb-2">
                公司名称
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
                className="input"
                placeholder="您的公司名称（选填）"
              />
            </div>
          </div>
          
          {/* 主题选择 */}
          <div>
            <label htmlFor="subject" className="label mb-2">
              咨询主题
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="input"
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          
          {/* 消息内容 */}
          <div>
            <label htmlFor="message" className="label mb-2 flex items-center">
              <FiMessageSquare className="mr-2" size={14} />
              留言内容 *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`textarea ${errors.message ? 'border-red-500' : ''}`}
              placeholder="请详细描述您的问题或需求..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
            <p className="text-sm text-gray-500 mt-2">
              已输入 {formData.message.length} 个字符
            </p>
          </div>
          
          {/* 隐私政策 */}
          <div className="flex items-start space-x-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={formData.privacy}
              onChange={handleCheckboxChange}
              className="mt-1 h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              我已阅读并同意
              <a 
                href="/privacy" 
                className="text-primary hover:underline mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                隐私政策
              </a>
              和
              <a 
                href="/terms" 
                className="text-primary hover:underline mx-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                服务条款
              </a>
            </label>
          </div>
          {errors.privacy && (
            <p className="text-red-500 text-sm">{errors.privacy}</p>
          )}
        </div>
        
        <div className="card-footer">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner mr-2" />
                提交中...
              </>
            ) : (
              <>
                <FiSend className="mr-2" />
                发送消息
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}