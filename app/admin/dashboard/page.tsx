"use client"

import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { BarChart, Users, FileText, Settings, LogOut, Plus, Edit, Trash, Home, Menu, X } from "lucide-react"

// Mock data for dashboard
const stats = [
  { title: "Total Blog Posts", value: 24, icon: FileText, color: "bg-blue-100 text-blue-600" },
  { title: "Total Admins", value: 3, icon: Users, color: "bg-green-100 text-green-600" },
  { title: "Blog Views", value: 12548, icon: BarChart, color: "bg-purple-100 text-purple-600" },
]

// Mock blog posts
const blogPosts = [
  {
    id: 1,
    title: "Transforming Rural Communities Through Water Access",
    excerpt: "How our well-drilling projects are changing lives in remote areas of Morocco.",
    date: "March 15, 2023",
    author: "Admin",
    status: "Published",
  },
  {
    id: 2,
    title: "Success Stories from Our Vocational Training Centers",
    excerpt: "Meet the graduates who are building sustainable futures through skills development.",
    date: "February 28, 2023",
    author: "Admin",
    status: "Published",
  },
  {
    id: 3,
    title: "The Impact of Education on Vulnerable Communities",
    excerpt: "How our educational initiatives are breaking the cycle of poverty.",
    date: "January 20, 2023",
    author: "Admin",
    status: "Published",
  },
  {
    id: 4,
    title: "Upcoming Humanitarian Caravan",
    excerpt: "Details about our upcoming humanitarian caravan to the Atlas Mountains.",
    date: "April 5, 2023",
    author: "Admin",
    status: "Draft",
  },
]

// Mock admins
const admins = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "Super Admin",
    lastLogin: "Today at 10:30 AM",
  },
  {
    id: 2,
    name: "Content Manager",
    email: "content@example.com",
    role: "Content Admin",
    lastLogin: "Yesterday at 3:45 PM",
  },
  {
    id: 3,
    name: "Blog Editor",
    email: "editor@example.com",
    role: "Editor",
    lastLogin: "March 28, 2023",
  },
]

export default function AdminDashboardPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // Simulate authentication check
  useEffect(() => {
    // In a real app, you would check if the user is authenticated
    // and redirect to login if not
  }, [])

  return (
    <div className="min-h-screen bg-blue-50 flex">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow bg-blue-900 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-bold text-white">Assalam Admin</span>
          </div>
          <div className="mt-8 flex-1 flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              {[
                { name: "Overview", icon: Home, href: "#overview", tab: "overview" },
                { name: "Blog Posts", icon: FileText, href: "#blog-posts", tab: "blog-posts" },
                { name: "Admins", icon: Users, href: "#admins", tab: "admins" },
                { name: "Settings", icon: Settings, href: "#settings", tab: "settings" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.tab)}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    activeTab === item.tab ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-700"
                  }`}
                >
                  <item.icon className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="px-2 mt-6">
            <Link
              href="/"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-blue-700"
            >
              <Home className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
              View Website
            </Link>
            <Link
              href="/admin/login"
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-blue-700"
            >
              <LogOut className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-blue-900 p-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">Assalam Admin</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed inset-0 z-40 bg-blue-900 md:hidden pt-16"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "Overview", icon: Home, href: "#overview", tab: "overview" },
              { name: "Blog Posts", icon: FileText, href: "#blog-posts", tab: "blog-posts" },
              { name: "Admins", icon: Users, href: "#admins", tab: "admins" },
              { name: "Settings", icon: Settings, href: "#settings", tab: "settings" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.tab)
                  setIsMobileMenuOpen(false)
                }}
                className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                  activeTab === item.tab ? "bg-blue-800 text-white" : "text-blue-100 hover:bg-blue-700"
                }`}
              >
                <item.icon className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-blue-800">
              <Link
                href="/"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 hover:bg-blue-700"
              >
                <Home className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
                View Website
              </Link>
              <Link
                href="/admin/login"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 hover:bg-blue-700"
              >
                <LogOut className="mr-3 h-6 w-6 text-blue-300" aria-hidden="true" />
                Logout
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1 pt-16 md:pt-0">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-blue-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="blog-posts">Blog Posts</TabsTrigger>
                  <TabsTrigger value="admins">Admins</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex items-center">
                              <div className={`p-3 rounded-full ${stat.color} mr-4`}>
                                <stat.icon className="h-6 w-6" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-blue-500">{stat.title}</p>
                                <p className="text-3xl font-bold text-blue-900">{stat.value.toLocaleString()}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-blue-900 mb-4">Recent Blog Posts</h2>
                        <div className="space-y-4">
                          {blogPosts.slice(0, 3).map((post) => (
                            <div key={post.id} className="flex items-start">
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                  <FileText className="h-6 w-6 text-blue-600" />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-blue-900">{post.title}</h3>
                                <p className="text-xs text-blue-500">{post.date}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button
                          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => setActiveTab("blog-posts")}
                        >
                          View All Posts
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h2>
                        <div className="space-y-4">
                          <Button
                            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                            onClick={() => alert("Create Blog Post")}
                          >
                            <Plus className="h-5 w-5 mr-2" />
                            Create Blog Post
                          </Button>
                          <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                            onClick={() => alert("Add New Admin")}
                          >
                            <Users className="h-5 w-5 mr-2" />
                            Add New Admin
                          </Button>
                          <Button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center"
                            onClick={() => setActiveTab("settings")}
                          >
                            <Settings className="h-5 w-5 mr-2" />
                            Update Settings
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Blog Posts Tab */}
                <TabsContent value="blog-posts" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-blue-900">All Blog Posts</h2>
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => alert("Create New Blog Post")}
                        >
                          <Plus className="h-5 w-5 mr-2" />
                          New Post
                        </Button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-blue-200">
                          <thead className="bg-blue-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Title
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Author
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-blue-200">
                            {blogPosts.map((post) => (
                              <tr key={post.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-blue-900">{post.title}</div>
                                  <div className="text-sm text-blue-500">{post.excerpt.substring(0, 50)}...</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{post.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{post.author}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      post.status === "Published"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {post.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <div className="flex space-x-2">
                                    <button
                                      className="text-blue-600 hover:text-blue-900"
                                      onClick={() => alert(`Edit post ${post.id}`)}
                                    >
                                      <Edit className="h-5 w-5" />
                                    </button>
                                    <button
                                      className="text-red-600 hover:text-red-900"
                                      onClick={() => alert(`Delete post ${post.id}`)}
                                    >
                                      <Trash className="h-5 w-5" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Admins Tab */}
                <TabsContent value="admins" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-blue-900">Admin Users</h2>
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => alert("Add New Admin")}
                        >
                          <Plus className="h-5 w-5 mr-2" />
                          New Admin
                        </Button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-blue-200">
                          <thead className="bg-blue-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Role
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Last Login
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-blue-200">
                            {admins.map((admin) => (
                              <tr key={admin.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-blue-900">{admin.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{admin.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      admin.role === "Super Admin"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {admin.role}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{admin.lastLogin}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <div className="flex space-x-2">
                                    <button
                                      className="text-blue-600 hover:text-blue-900"
                                      onClick={() => alert(`Edit admin ${admin.id}`)}
                                    >
                                      <Edit className="h-5 w-5" />
                                    </button>
                                    {admin.role !== "Super Admin" && (
                                      <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => alert(`Delete admin ${admin.id}`)}
                                      >
                                        <Trash className="h-5 w-5" />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-lg font-semibold text-blue-900 mb-6">Website Settings</h2>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="site-title" className="text-sm font-medium text-blue-900">
                            Website Title
                          </label>
                          <Input
                            id="site-title"
                            defaultValue="Assalam Foundation"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="site-description" className="text-sm font-medium text-blue-900">
                            Website Description
                          </label>
                          <Textarea
                            id="site-description"
                            defaultValue="Transforming Lives, Building Futures"
                            className="min-h-[100px] border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="contact-email" className="text-sm font-medium text-blue-900">
                            Contact Email
                          </label>
                          <Input
                            id="contact-email"
                            type="email"
                            defaultValue="info@assalamfoundation.org"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="contact-phone" className="text-sm font-medium text-blue-900">
                            Contact Phone
                          </label>
                          <Input
                            id="contact-phone"
                            defaultValue="+212 707 913 840"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="social-facebook" className="text-sm font-medium text-blue-900">
                            Facebook URL
                          </label>
                          <Input
                            id="social-facebook"
                            defaultValue="https://facebook.com/assalamfoundation"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="social-twitter" className="text-sm font-medium text-blue-900">
                            Twitter URL
                          </label>
                          <Input
                            id="social-twitter"
                            defaultValue="https://twitter.com/assalamfoundation"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="social-instagram" className="text-sm font-medium text-blue-900">
                            Instagram URL
                          </label>
                          <Input
                            id="social-instagram"
                            defaultValue="https://instagram.com/assalamfoundation"
                            className="border-blue-200 focus:border-blue-500"
                          />
                        </div>

                        <Button
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          onClick={() => alert("Settings saved!")}
                        >
                          Save Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

