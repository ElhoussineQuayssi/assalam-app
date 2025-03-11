"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Project data
const projects = [
  {
    id: "kindergarten",
    title: "Rihana As-Salam Kindergarten",
    description: "Providing a safe and inspiring educational environment for preschool children.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "himaya",
    title: "Himaya Center",
    description: "Supporting women and children in difficult situations through comprehensive services.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "imtiaz",
    title: "Imtiaz Project",
    description: "Sponsoring brilliant students from disadvantaged backgrounds until their professional integration.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "nadi-assalam",
    title: "Nadi Assalam",
    description: "Training center for traditional and modern sewing, empowering widows and vulnerable women.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "fataer-al-baraka",
    title: "Fataer Al Baraka",
    description: "Training center for Moroccan pastry production, helping women achieve economic autonomy.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "orphan-sponsorship",
    title: "Orphan Sponsorship",
    description: "Providing comprehensive support to orphans within their family environment.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Fatima L.",
    role: "Nadi Assalam Graduate",
    content:
      "The training at Nadi Assalam changed my life. I now have my own small business and can support my family.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Ahmed K.",
    role: "Imtiaz Scholar",
    content:
      "Thanks to the Imtiaz project, I was able to complete my engineering degree. Now I'm giving back by mentoring other students.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Samira M.",
    role: "Beneficiary",
    content:
      "The support from Assalam Foundation helped my children continue their education after we lost their father.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Transforming Rural Communities Through Water Access",
    excerpt: "How our well-drilling projects are changing lives in remote areas of Morocco.",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
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
]

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="pt-16 overflow-hidden">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="block">Transforming Lives,</span>
              <span className="block">Building Futures</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8"
            >
              The Assalam Foundation is dedicated to providing essential resources and creating sustainable impact in
              vulnerable communities across Morocco.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/projects">Learn More</Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Donate Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          style={{ y: y1 }}
          className="absolute -bottom-20 right-0 w-64 h-64 bg-green-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -top-20 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
        />
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Our Mission</h2>
              <p className="text-blue-900 text-lg mb-6">
                At Assalam Foundation, we believe in a world where every individual, regardless of where they live, has
                access to essential resources to thrive. Our mission is to empower vulnerable communities through
                sustainable development projects and comprehensive support programs.
              </p>
              <ul className="space-y-2">
                {[
                  "Providing access to education and vocational training",
                  "Supporting women and children in difficult situations",
                  "Developing infrastructure in rural communities",
                  "Creating opportunities for economic empowerment",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
              <p className="text-blue-900 text-lg mb-6">
                We envision a Morocco where all communities have equal opportunities to thrive, where poverty is
                eliminated, and where every individual can reach their full potential. We strive to be a catalyst for
                positive change, fostering self-reliance and sustainable development.
              </p>
              <p className="text-blue-900 text-lg">
                Through our various projects and initiatives, we aim to create lasting impact that transforms lives and
                builds stronger, more resilient communities for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Projects</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Discover how our diverse range of projects is making a difference in communities across Morocco.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                    <p className="text-blue-700 mb-4">{project.description}</p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full" asChild>
                      <Link href={`/projects/${project.id}`}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-4">Testimonials</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Hear from those whose lives have been transformed through our programs and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ rotateY: 10, z: 10 }}
                className="bg-blue-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-400">{testimonial.name}</h3>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-100">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Latest News</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Stay updated with our latest activities, success stories, and upcoming events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full border-none shadow-lg">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-blue-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h3>
                    <p className="text-blue-700 mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50" asChild>
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-xl text-blue-100 mb-8">
              Your support can help us continue our mission of transforming lives and building better futures for
              vulnerable communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/contact">Donate Now</Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Volunteer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

