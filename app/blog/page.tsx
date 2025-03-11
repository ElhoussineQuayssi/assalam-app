"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Blog categories
const categories = ["All", "Education", "Women Empowerment", "Rural Development", "Humanitarian Aid", "Success Stories"]

// Blog posts
const blogPosts = [
  {
    id: 1,
    title: "Transforming Rural Communities Through Water Access",
    excerpt: "How our well-drilling projects are changing lives in remote areas of Morocco.",
    date: "March 15, 2023",
    category: "Rural Development",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Success Stories from Our Vocational Training Centers",
    excerpt: "Meet the graduates who are building sustainable futures through skills development.",
    date: "February 28, 2023",
    category: "Success Stories",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "The Impact of Education on Vulnerable Communities",
    excerpt: "How our educational initiatives are breaking the cycle of poverty.",
    date: "January 20, 2023",
    category: "Education",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Empowering Women Through Economic Independence",
    excerpt: "Stories of resilience and transformation from our women's empowerment programs.",
    date: "December 10, 2022",
    category: "Women Empowerment",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Winter Relief Campaign: Bringing Warmth to Remote Villages",
    excerpt: "Our humanitarian caravans delivered essential supplies to communities facing harsh winter conditions.",
    date: "November 5, 2022",
    category: "Humanitarian Aid",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "From Orphan to Engineer: Ahmed's Inspiring Journey",
    excerpt: "How our orphan sponsorship program helped Ahmed achieve his dreams against all odds.",
    date: "October 15, 2022",
    category: "Success Stories",
    image: "/placeholder.svg?height=300&width=500",
  },
]

// Featured blog post
const featuredPost = {
  id: 7,
  title: "30 Years of Impact: Celebrating Three Decades of Community Service",
  excerpt:
    "As we mark our 30th anniversary, we look back at the journey of Assalam Foundation and the lives we've touched across Morocco.",
  date: "April 5, 2023",
  category: "Foundation News",
  image: "/placeholder.svg?height=400&width=800",
}

export default function BlogPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="pt-16">
      <Header />
      {/* Introduction Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Stay updated with our latest news, success stories, and insights from our various projects and
              initiatives.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="#blog-grid">Read More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Featured Article
          </h2>
          <motion.div
            className="bg-blue-50 rounded-xl overflow-hidden shadow-xl"
            data-aos="fade-up"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm text-green-600 font-medium mb-2">{featuredPost.category}</span>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{featuredPost.title}</h3>
                <p className="text-blue-700 mb-4">{featuredPost.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-500">{featuredPost.date}</span>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="blog-grid" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Latest Articles
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 rounded-full bg-white text-blue-900 border border-blue-200 hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-green-600 font-medium">{post.category}</span>
                      <span className="text-sm text-blue-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                    <p className="text-blue-700 mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 w-full" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12" data-aos="fade-up">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-blue-500 text-blue-500">
                Previous
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">1</Button>
              <Button variant="outline" className="border-blue-500 text-blue-500">
                2
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500">
                3
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

