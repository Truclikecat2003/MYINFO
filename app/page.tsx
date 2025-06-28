"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Mail,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  Users,
  Coffee,
  Star,
  Calendar,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Target,
  Globe,
} from "lucide-react"

export default function ProfessionalPortfolio() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast", "Problem Solver"]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    if (typedText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTypedText("")
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [typedText, currentIndex, titles])

  const skills = [
    { name: "React/Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "PostgreSQL", level: 82, category: "Database" },
    { name: "AWS", level: 78, category: "DevOps" },
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Figma", level: 85, category: "Design" },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Vietnam",
      period: "2022 - Hiện tại",
      description:
        "Phát triển và duy trì các ứng dụng web quy mô lớn phục vụ hơn 100,000 người dùng. Dẫn dắt team 5 developers và cải thiện performance hệ thống 40%.",
      achievements: [
        "Tăng performance ứng dụng 40% thông qua code optimization",
        "Dẫn dắt team phát triển 3 sản phẩm chính",
        "Implement CI/CD pipeline giảm deployment time 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Xây dựng giao diện người dùng cho các ứng dụng fintech. Tham gia phát triển từ MVP đến sản phẩm có 50,000+ người dùng.",
      achievements: [
        "Phát triển component library được sử dụng trong 5+ projects",
        "Cải thiện user experience dẫn đến tăng 25% user retention",
        "Mentor 3 junior developers",
      ],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency ABC",
      period: "2019 - 2020",
      description:
        "Bắt đầu sự nghiệp với việc phát triển website cho các doanh nghiệp vừa và nhỏ. Học hỏi và áp dụng các best practices trong development.",
      achievements: [
        "Hoàn thành 20+ website projects",
        "Đạt 98% client satisfaction rate",
        "Học và áp dụng thành công React ecosystem",
      ],
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Nền tảng thương mại điện tử đầy đủ tính năng với admin dashboard, payment integration và real-time analytics.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
      metrics: {
        users: "10,000+",
        performance: "98%",
        uptime: "99.9%",
      },
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory management",
        "Advanced analytics dashboard",
        "Mobile-responsive design",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management SaaS",
      description: "Ứng dụng quản lý dự án với real-time collaboration, time tracking và advanced reporting.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
      metrics: {
        users: "5,000+",
        performance: "95%",
        uptime: "99.8%",
      },
      features: [
        "Real-time collaboration",
        "Advanced project analytics",
        "Time tracking & reporting",
        "Team management tools",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Dashboard phân tích dữ liệu với machine learning để dự đoán trends và insights tự động.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"],
      metrics: {
        accuracy: "94%",
        processing: "2.3s",
        insights: "1000+",
      },
      features: ["Predictive analytics", "Custom ML models", "Interactive visualizations", "Automated reporting"],
      github: "#",
      demo: "#",
    },
  ]

  const testimonials = [
    {
      name: "Nguyễn Minh Tuấn",
      role: "CTO, TechCorp Vietnam",
      content:
        "Một trong những developers tài năng nhất tôi từng làm việc cùng. Khả năng giải quyết vấn đề phức tạp và leadership skills rất xuất sắc.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Lan",
      role: "Product Manager, StartupXYZ",
      content:
        "Làm việc với anh ấy là một trải nghiệm tuyệt vời. Code quality cao, deadline luôn đúng hạn và communication skills rất tốt.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "David Johnson",
      role: "Senior Developer, Remote Team",
      content:
        "Outstanding technical skills and great team player. His contributions significantly improved our product quality and team productivity.",
      avatar: "/placeholder.svg?height=60&width=60",
      
    },
  ]

  const [personalInfo, setPersonalInfo] = useState({
  name: "Lã Phạm Thanh Trúc",
  title: "Senior Full Stack Developer",
  email: "laphamthanhtruc2003@gmail.com",
  phone: "+84 334 022 199",
  location: "TP. Thủ Dầu Một, Bình Dương, Việt Nam",
  github: "github.com/yourprofile",
  summary: "Senior Full Stack Developer với 3+ năm kinh nghiệm phát triển ứng dụng web quy mô lớn.",
  profileImage: "/IMG_1841.JPG", // ✅ đường dẫn đúng
})


  const [showDetailModal, setShowDetailModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editForm, setEditForm] = useState(personalInfo)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const generatePDF = () => {
    // Import jsPDF dynamically
    import("jspdf").then(({ default: jsPDF }) => {
      const doc = new jsPDF()

      // Header
      doc.setFontSize(24)
      doc.setTextColor(30, 64, 175) // Blue color
      doc.text(personalInfo.name.toUpperCase(), 20, 30)

      doc.setFontSize(14)
      doc.setTextColor(107, 114, 128) // Gray color
      doc.text(personalInfo.title, 20, 40)

      // Contact info
      doc.setFontSize(10)
      doc.setTextColor(75, 85, 99)
      doc.text(`Email: ${personalInfo.email}`, 20, 55)
      doc.text(`Phone: ${personalInfo.phone}`, 20, 62)
      doc.text(`Location: ${personalInfo.location}`, 20, 69)
      doc.text(`GitHub: ${personalInfo.github}`, 20, 76)

      // Line separator
      doc.setDrawColor(59, 130, 246)
      doc.setLineWidth(1)
      doc.line(20, 85, 190, 85)

      // Summary
      doc.setFontSize(14)
      doc.setTextColor(30, 64, 175)
      doc.text("TỔNG QUAN", 20, 100)

      doc.setFontSize(10)
      doc.setTextColor(75, 85, 99)
      const summaryLines = doc.splitTextToSize(personalInfo.summary, 170)
      doc.text(summaryLines, 20, 110)

      let yPosition = 110 + summaryLines.length * 5 + 15

      // Experience
      doc.setFontSize(14)
      doc.setTextColor(30, 64, 175)
      doc.text("KINH NGHIỆM LÀM VIỆC", 20, yPosition)
      yPosition += 15

      experiences.forEach((exp) => {
        doc.setFontSize(12)
        doc.setTextColor(55, 65, 81)
        doc.text(exp.title, 20, yPosition)
        yPosition += 7

        doc.setFontSize(10)
        doc.setTextColor(107, 114, 128)
        doc.text(`${exp.company} | ${exp.period}`, 20, yPosition)
        yPosition += 7

        doc.setTextColor(75, 85, 99)
        const descLines = doc.splitTextToSize(exp.description, 170)
        doc.text(descLines, 20, yPosition)
        yPosition += descLines.length * 5 + 5

        exp.achievements.forEach((achievement) => {
          const achLines = doc.splitTextToSize(`• ${achievement}`, 165)
          doc.text(achLines, 25, yPosition)
          yPosition += achLines.length * 4
        })
        yPosition += 10

        // Check if we need a new page
        if (yPosition > 250) {
          doc.addPage()
          yPosition = 20
        }
      })

      // Skills
      if (yPosition > 200) {
        doc.addPage()
        yPosition = 20
      }

      doc.setFontSize(14)
      doc.setTextColor(30, 64, 175)
      doc.text("KỸ NĂNG CHUYÊN MÔN", 20, yPosition)
      yPosition += 15

      const skillCategories = [
        { name: "Frontend", skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
        { name: "Backend", skills: ["Node.js/Express", "Python/Django", "PostgreSQL", "MongoDB"] },
        { name: "DevOps", skills: ["AWS", "Docker", "Git/GitHub", "CI/CD"] },
      ]

      skillCategories.forEach((category) => {
        doc.setFontSize(11)
        doc.setTextColor(55, 65, 81)
        doc.text(category.name + ":", 20, yPosition)
        yPosition += 6

        doc.setFontSize(9)
        doc.setTextColor(75, 85, 99)
        doc.text(category.skills.join(", "), 25, yPosition)
        yPosition += 10
      })

      // Save the PDF
      doc.save(`CV-${personalInfo.name.replace(/\s+/g, "-")}.pdf`)
    })
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string
        setEditForm((prev) => ({ ...prev, profileImage: imageUrl }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveEdit = () => {
    setPersonalInfo(editForm)
    setShowEditModal(false)
    // Save to localStorage
    localStorage.setItem("personalInfo", JSON.stringify(editForm))
  }

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("personalInfo")
    if (saved) {
      const parsedInfo = JSON.parse(saved)
      setPersonalInfo(parsedInfo)
      setEditForm(parsedInfo)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["Trang chủ", "Giới thiệu", "Kinh nghiệm", "Dự án", "Liên hệ"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => setShowDetailModal(true)}
              >
                Xem chi tiết
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                onClick={() => setShowEditModal(true)}
              >
                Chỉnh sửa
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={generatePDF}
              >
                <Download className="mr-2 h-4 w-4" />
                Tải CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="relative inline-block mb-8">
              <img
                src={personalInfo.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {personalInfo.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name.split(" ").slice(-1)}
              </span>
            </h1>

            <div className="text-2xl md:text-3xl text-blue-300 mb-8 h-12">
              {typedText}
              <span className="animate-pulse">|</span>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Với <span className="text-blue-400 font-semibold">5+ năm kinh nghiệm</span> trong phát triển web, tôi
              chuyên tạo ra những sản phẩm công nghệ có tác động tích cực đến cuộc sống của hàng triệu người dùng. Đam
              mê <span className="text-purple-400 font-semibold">innovation</span> và
              <span className="text-green-400 font-semibold"> problem-solving</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "50+", label: "Dự án hoàn thành", icon: Target },
                { number: "100K+", label: "Người dùng", icon: Users },
                { number: "5+", label: "Năm kinh nghiệm", icon: Calendar },
                { number: "98%", label: "Client satisfaction", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Liên hệ ngay
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                Xem GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="giới-thiệu"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Tìm hiểu về tôi
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Về
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">tôi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hành trình từ một sinh viên IT đến Senior Developer với đam mê tạo ra những sản phẩm có ý nghĩa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className={`relative group`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="About me"
                  className="rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-xl">
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1000+</div>
                      <div className="text-sm text-gray-600">Cups of coffee</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-xl">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Projects done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Xin chào! Tôi là một{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Passionate Developer
                  </span>
                </h3>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Bắt đầu từ năm 2019 với vai trò Junior Developer, tôi đã không ngừng học hỏi và phát triển. Hiện
                    tại, tôi đang làm <span className="font-semibold text-blue-600">Senior Full Stack Developer</span>{" "}
                    tại TechCorp Vietnam, nơi tôi dẫn dắt team phát triển các sản phẩm phục vụ hàng trăm nghìn người
                    dùng.
                  </p>
                  <p>
                    Tôi tin rằng{" "}
                    <span className="font-semibold text-purple-600">công nghệ có thể thay đổi thế giới</span>, và mỗi
                    dòng code tôi viết đều hướng tới mục tiêu tạo ra những trải nghiệm tốt hơn cho người dùng. Đam mê
                    của tôi không chỉ dừng lại ở việc code mà còn ở việc giải quyết các vấn đề phức tạp một cách sáng
                    tạo.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Code,
                    title: "Clean Code",
                    desc: "Viết code dễ đọc, dễ maintain và scalable",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Zap,
                    title: "Performance",
                    desc: "Tối ưu hóa tốc độ và hiệu suất tối đa",
                    color: "from-yellow-500 to-orange-500",
                  },
                  {
                    icon: Users,
                    title: "Team Work",
                    desc: "Làm việc nhóm hiệu quả và leadership",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth",
                    desc: "Học hỏi và phát triển liên tục",
                    color: "from-purple-500 to-pink-500",
                  },
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2">
                      <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl mb-4 w-fit`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => {
                    // Same CV generation function as above
                    const cvContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Nguyễn Văn A</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: #fff; }
        .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #3b82f6; padding-bottom: 20px; }
        .header h1 { font-size: 2.5em; color: #1e40af; margin-bottom: 10px; }
        .header .title { font-size: 1.3em; color: #6b7280; margin-bottom: 15px; }
        .contact-info { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
        .contact-info span { color: #4b5563; }
        .section { margin-bottom: 35px; }
        .section h2 { color: #1e40af; font-size: 1.4em; margin-bottom: 15px; border-left: 4px solid #3b82f6; padding-left: 15px; }
        .experience-item, .education-item { margin-bottom: 25px; }
        .experience-item h3 { color: #374151; font-size: 1.2em; margin-bottom: 5px; }
        .experience-item .company { color: #6b7280; font-weight: bold; margin-bottom: 5px; }
        .experience-item .period { color: #9ca3af; font-size: 0.9em; margin-bottom: 10px; }
        .experience-item ul { margin-left: 20px; }
        .experience-item li { margin-bottom: 5px; color: #4b5563; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .skill-category h3 { color: #374151; margin-bottom: 10px; }
        .skill-category ul { list-style: none; }
        .skill-category li { background: #f3f4f6; padding: 5px 10px; margin-bottom: 5px; border-radius: 5px; color: #4b5563; }
        .projects .project { margin-bottom: 20px; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; }
        .project h3 { color: #1e40af; margin-bottom: 8px; }
        .project .tech { color: #6b7280; font-size: 0.9em; margin-bottom: 8px; }
        .project p { color: #4b5563; }
        @media print { body { font-size: 12px; } .container { padding: 20px; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>NGUYỄN VĂN A</h1>
            <div class="title">Senior Full Stack Developer</div>
            <div class="contact-info">
                <span>📧 your.email@example.com</span>
                <span>📱 +84 123 456 789</span>
                <span>📍 TP. Hồ Chí Minh, Việt Nam</span>
                <span>🌐 github.com/yourprofile</span>
            </div>
        </div>

        <div class="section">
            <h2>TÓNG QUAN</h2>
            <p>Senior Full Stack Developer với 5+ năm kinh nghiệm phát triển ứng dụng web quy mô lớn. Chuyên môn về React, Node.js, và các công nghệ cloud hiện đại. Đã dẫn dắt team phát triển các sản phẩm phục vụ hơn 100,000 người dùng và cải thiện performance hệ thống 40%.</p>
        </div>

        <div class="section">
            <h2>KINH NGHIỆM LÀM VIỆC</h2>
            
            <div class="experience-item">
                <h3>Senior Full Stack Developer</h3>
                <div class="company">TechCorp Vietnam</div>
                <div class="period">01/2022 - Hiện tại</div>
                <ul>
                    <li>Dẫn dắt team 5 developers phát triển 3 sản phẩm chính phục vụ 100,000+ người dùng</li>
                    <li>Cải thiện performance ứng dụng 40% thông qua code optimization và database tuning</li>
                    <li>Implement CI/CD pipeline giảm deployment time từ 2 giờ xuống 20 phút</li>
                    <li>Mentor junior developers và thiết lập coding standards cho team</li>
                </ul>
            </div>

            <div class="experience-item">
                <h3>Frontend Developer</h3>
                <div class="company">StartupXYZ</div>
                <div class="period">03/2020 - 12/2021</div>
                <ul>
                    <li>Phát triển giao diện người dùng cho ứng dụng fintech từ MVP đến 50,000+ người dùng</li>
                    <li>Xây dựng component library được sử dụng trong 5+ projects</li>
                    <li>Cải thiện user experience dẫn đến tăng 25% user retention rate</li>
                    <li>Collaborate với UX team để implement responsive design</li>
                </ul>
            </div>

            <div class="experience-item">
                <h3>Junior Developer</h3>
                <div class="company">Digital Agency ABC</div>
                <div class="period">06/2019 - 02/2020</div>
                <ul>
                    <li>Phát triển 20+ website cho các doanh nghiệp vừa và nhỏ</li>
                    <li>Đạt 98% client satisfaction rate</li>
                    <li>Học và áp dụng thành công React ecosystem</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2>KỸ NĂNG CHUYÊN MÔN</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React/Next.js (Advanced)</li>
                        <li>TypeScript (Advanced)</li>
                        <li>Tailwind CSS (Advanced)</li>
                        <li>HTML5/CSS3 (Expert)</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js/Express (Advanced)</li>
                        <li>Python/Django (Intermediate)</li>
                        <li>PostgreSQL (Advanced)</li>
                        <li>MongoDB (Intermediate)</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>DevOps & Tools</h3>
                    <ul>
                        <li>AWS (Intermediate)</li>
                        <li>Docker (Intermediate)</li>
                        <li>Git/GitHub (Advanced)</li>
                        <li>CI/CD (Intermediate)</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Team Leadership</li>
                        <li>Project Management</li>
                        <li>Problem Solving</li>
                        <li>Communication</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>DỰ ÁN NỔI BẬT</h2>
            <div class="projects">
                <div class="project">
                    <h3>E-commerce Platform</h3>
                    <div class="tech">Tech Stack: Next.js, TypeScript, PostgreSQL, Stripe, Redis</div>
                    <p>Nền tảng thương mại điện tử đầy đủ tính năng với admin dashboard, payment integration và real-time analytics. Phục vụ 10,000+ người dùng với 99.9% uptime.</p>
                </div>
                <div class="project">
                    <h3>Task Management SaaS</h3>
                    <div class="tech">Tech Stack: React, Node.js, MongoDB, Socket.io, AWS</div>
                    <p>Ứng dụng quản lý dự án với real-time collaboration và advanced reporting. Được 5,000+ teams sử dụng hàng ngày.</p>
                </div>
                <div class="project">
                    <h3>AI Analytics Dashboard</h3>
                    <div class="tech">Tech Stack: Python, React, TensorFlow, PostgreSQL, Docker</div>
                    <p>Dashboard phân tích dữ liệu với machine learning để dự đoán trends. Đạt 94% accuracy trong predictions.</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>HỌC VẤN</h2>
            <div class="education-item">
                <h3>Cử nhân Công nghệ Thông tin</h3>
                <div class="company">Đại học Bách Khoa TP.HCM</div>
                <div class="period">2015 - 2019</div>
                <p>GPA: 3.6/4.0 - Chuyên ngành: Kỹ thuật Phần mềm</p>
            </div>
        </div>

        <div class="section">
            <h2>CHỨNG CHỈ</h2>
            <ul>
                <li>AWS Certified Developer Associate (2023)</li>
                <li>Google Cloud Professional Developer (2022)</li>
                <li>MongoDB Certified Developer (2021)</li>
            </ul>
        </div>

        <div class="section">
            <h2>NGÔN NGỮ</h2>
            <ul>
                <li>Tiếng Việt: Bản ngữ</li>
                <li>Tiếng Anh: Thành thạo (IELTS 7.0)</li>
            </ul>
        </div>
    </div>
</body>
</html>`
                    const blob = new Blob([cvContent], { type: "text/html" })
                    const url = URL.createObjectURL(blob)
                    const link = document.createElement("a")
                    link.href = url
                    link.download = "CV-Nguyen-Van-A.html"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                    URL.revokeObjectURL(url)

                    const newWindow = window.open()
                    if (newWindow) {
                      newWindow.document.write(cvContent)
                      newWindow.document.close()
                    }
                  }}
                >
                  <Download className="mr-3 h-5 w-5" />
                  Tải CV của tôi
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  <ArrowRight className="mr-3 h-5 w-5" />
                  Xem Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Thành tựu & Con số</h3>
              <p className="text-gray-600 text-lg">Những con số nói lên hành trình phát triển của tôi</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  number: "50+",
                  label: "Dự án hoàn thành",
                  icon: Target,
                  color: "from-blue-500 to-cyan-500",
                  description: "Từ website đơn giản đến ứng dụng enterprise",
                },
                {
                  number: "100K+",
                  label: "Người dùng",
                  icon: Users,
                  color: "from-green-500 to-emerald-500",
                  description: "Phục vụ trên các sản phẩm tôi phát triển",
                },
                {
                  number: "5+",
                  label: "Năm kinh nghiệm",
                  icon: Calendar,
                  color: "from-purple-500 to-pink-500",
                  description: "Từ junior đến senior developer",
                },
                {
                  number: "98%",
                  label: "Client satisfaction",
                  icon: Star,
                  color: "from-yellow-500 to-orange-500",
                  description: "Đánh giá từ khách hàng và đồng nghiệp",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div
                      className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl mx-auto w-fit shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kỹ năng &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Chuyên môn
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Công nghệ và tools tôi sử dụng để tạo ra những sản phẩm chất lượng cao
            </p>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-bold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                    <Badge variant="secondary" className="mt-2">
                      {skill.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { category: "Development", tools: ["VS Code", "Git", "Postman", "Docker", "Figma"] },
                  { category: "Cloud & DevOps", tools: ["AWS", "Vercel", "Netlify", "GitHub Actions", "Jenkins"] },
                  { category: "Databases", tools: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
                ].map((group, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{group.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {group.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { skill: "Leadership", level: 90, icon: Users },
                  { skill: "Communication", level: 95, icon: Globe },
                  { skill: "Problem Solving", level: 92, icon: Target },
                  { skill: "Time Management", level: 88, icon: Calendar },
                ].map((skill, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <skill.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{skill.skill}</h3>
                      <Progress value={skill.level} className="h-2" />
                      <span className="text-sm text-gray-600 mt-2 block">{skill.level}%</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="kinh-nghiệm" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kinh nghiệm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                làm việc
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hành trình phát triển sự nghiệp từ Junior đến Senior Developer
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        <Badge>{exp.period}</Badge>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Thành tựu chính:</h4>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="dự-án" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dự án{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                nổi bật
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những sản phẩm tôi tự hào đã tạo ra và đóng góp vào sự phát triển của công nghệ
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">{project.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-gray-800">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                      >
                        <ExternalLink className="mr-3 h-5 w-5" />
                        Xem Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                      >
                        <Github className="mr-3 h-5 w-5" />
                        Xem GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Detail Modal */}
      {showDetailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Thông tin chi tiết</h2>
                <Button variant="outline" onClick={() => setShowDetailModal(false)}>
                  Đóng
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={personalInfo.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{personalInfo.name}</h3>
                    <p className="text-gray-600">{personalInfo.title}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{personalInfo.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Điện thoại</label>
                    <p className="text-gray-900">{personalInfo.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
                    <p className="text-gray-900">{personalInfo.location}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">GitHub</label>
                    <p className="text-gray-900">{personalInfo.github}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tóm tắt</label>
                  <p className="text-gray-900 leading-relaxed">{personalInfo.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Chỉnh sửa thông tin</h2>
                <Button variant="outline" onClick={() => setShowEditModal(false)}>
                  Hủy
                </Button>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <img
                    src={editForm.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto border-2 border-gray-200 mb-4"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                    Thay đổi ảnh
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ tên</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Chức danh</label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Điện thoại</label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
                    <input
                      type="text"
                      value={editForm.location}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, location: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                    <input
                      type="text"
                      value={editForm.github}
                      onChange={(e) => setEditForm((prev) => ({ ...prev, github: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tóm tắt</label>
                  <textarea
                    rows={4}
                    value={editForm.summary}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, summary: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex space-x-4">
                  <Button onClick={handleSaveEdit} className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                    Lưu thay đổi
                  </Button>
                  <Button variant="outline" onClick={() => setShowEditModal(false)} className="flex-1">
                    Hủy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
