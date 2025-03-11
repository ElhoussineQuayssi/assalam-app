"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Related blog posts
const relatedPosts = [
  {
    id: 2,
    title: "Success Stories from Our Vocational Training Centers",
    excerpt: "Meet the graduates who are building sustainable futures through skills development.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Impact of Education on Vulnerable Communities",
    excerpt: "How our educational initiatives are breaking the cycle of poverty.",
    date: "January 20, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Empowering Women Through Economic Independence",
    excerpt: "Stories of resilience and transformation from our women's empowerment programs.",
    date: "December 10, 2022",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="pt-16">
      <Header />
      {/* Blog Title and Metadata */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                Rural Development
              </span>
              <h1 className="text-4xl font-bold mb-4">Transforming Rural Communities Through Water Access</h1>
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-2">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Author" fill className="object-cover" />
                  </div>
                  <span>By Admin</span>
                </div>
                <span>•</span>
                <span>March 15, 2023</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative h-96 mb-8" data-aos="fade-up">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Blog featured image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="prose prose-lg max-w-none" data-aos="fade-up">
                <p>
                  Access to clean water is a fundamental human right, yet many rural communities in Morocco still
                  struggle with water scarcity. At Assalam Foundation, we've made it our mission to address this
                  critical issue through our well-drilling projects in remote areas.
                </p>

                <h2>The Challenge</h2>
                <p>
                  In many rural regions of Morocco, particularly in the Atlas Mountains and southern provinces,
                  communities face severe water shortages. Women and children often walk several kilometers daily to
                  fetch water from distant sources, which impacts education, health, and overall quality of life.
                </p>

                <div className="my-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600" data-aos="fade-right">
                  <p className="italic text-blue-800">
                    "Before the well was built in our village, I spent hours each day collecting water instead of
                    attending school. Now I can focus on my education and dream of a better future."
                  </p>
                  <p className="font-bold text-blue-900 mt-2">— Amina, 12, Rural Village Resident</p>
                </div>

                <h2>Our Approach</h2>
                <p>
                  Our well-drilling projects follow a comprehensive approach that ensures sustainability and community
                  ownership:
                </p>
                <ul>
                  <li>Thorough geological studies to identify optimal drilling locations</li>
                  <li>Modern drilling techniques and equipment for reliable water access</li>
                  <li>Installation of solar-powered pumping systems for sustainable operation</li>
                  <li>Community training on maintenance and water management</li>
                  <li>Formation of local water committees to oversee operations</li>
                </ul>

                <h2>The Impact</h2>
                <p>
                  The impact of these projects extends far beyond just providing water. We've observed significant
                  improvements in:
                </p>
                <ul>
                  <li>Health: Reduction in waterborne diseases</li>
                  <li>Education: Increased school attendance, especially for girls</li>
                  <li>Agriculture: Enhanced food security through irrigation</li>
                  <li>Women's empowerment: More time for income-generating activities</li>
                  <li>Community development: Strengthened social cohesion</li>
                </ul>

                <p>
                  Over the past five years, we've completed 25 well-drilling projects, benefiting more than 15,000
                  people across rural Morocco. Each well serves approximately 600 people, transforming entire
                  communities.
                </p>

                <h2>Looking Forward</h2>
                <p>
                  While we're proud of what we've accomplished, we recognize that many more communities still lack
                  access to clean water. With your support, we aim to double our impact in the coming years, bringing
                  hope and transformation to even more rural villages.
                </p>

                <p>
                  Join us in our mission to ensure that every community in Morocco has access to this essential
                  resource. Together, we can continue to transform lives through water access.
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg" data-aos="fade-up">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5 text-blue-700" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-5 w-5 text-blue-500" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Card */}
              <Card className="border-none shadow-lg" data-aos="fade-left">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Author" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900">Admin</h3>
                      <p className="text-blue-600">Content Manager</p>
                    </div>
                  </div>
                  <p className="text-blue-700">
                    Dedicated to sharing stories of impact and transformation from Assalam Foundation's projects across
                    Morocco.
                  </p>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-none shadow-lg" data-aos="fade-left" data-aos-delay="100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-900 mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Rural Development", "Education", "Women Empowerment", "Humanitarian Aid", "Success Stories"].map(
                      (category, index) => (
                        <Link
                          key={index}
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                        >
                          {category}
                        </Link>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-none shadow-lg" data-aos="fade-left" data-aos-delay="200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {[
                      "Success Stories from Our Vocational Training Centers",
                      "The Impact of Education on Vulnerable Communities",
                      "Empowering Women Through Economic Independence",
                    ].map((title, index) => (
                      <Link key={index} href={`/blog/${index + 2}`} className="flex items-center space-x-3 group">
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt={title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-blue-700 group-hover:text-blue-500 transition-colors">{title}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ rotateY: 10 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-blue-500 mb-2">{post.date}</p>
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
        </div>
      </section>
      <Footer />
    </div>
  )
}

