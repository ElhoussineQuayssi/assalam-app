"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Timeline data
const timelineEvents = [
  {
    year: "1992",
    title: "Foundation Established",
    description:
      "Assalam Foundation was established as a national, independent, social, solidarity and charitable foundation based on volunteerism.",
  },
  {
    year: "2000",
    title: "Expansion Across Morocco",
    description:
      "The foundation expanded its reach to multiple cities across Morocco, establishing new sections to serve more communities.",
  },
  {
    year: "2013",
    title: "Rihana As-Salam Kindergarten",
    description:
      "Inaugurated the Rihana As-Salam Kindergarten in partnership with the Regional Directorate of Anfa at El Bachiri School.",
  },
  {
    year: "2015",
    title: "Himaya Center Launch",
    description: "Opened the multidisciplinary Himaya Center to support women and children in difficult situations.",
  },
  {
    year: "2018",
    title: "Imtiaz Project Initiated",
    description: "Launched the Imtiaz project to sponsor brilliant students from disadvantaged backgrounds.",
  },
  {
    year: "2023",
    title: "30 Years of Impact",
    description: "Celebrated 30 years of service with 36 sections across Morocco and thousands of lives transformed.",
  },
]

// Team members data
const teamMembers = [
  {
    name: "Mohammed Alami",
    role: "President",
    bio: "With over 25 years of experience in social development, Mohammed has been leading the foundation since 2010.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Fatima Zahra",
    role: "Executive Director",
    bio: "Fatima brings her expertise in nonprofit management and community development to oversee the foundation's operations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ahmed Benani",
    role: "Projects Director",
    bio: "Ahmed coordinates all the foundation's projects, ensuring effective implementation and sustainable impact.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Leila Mansouri",
    role: "Financial Director",
    bio: "Leila manages the foundation's finances, ensuring transparency and accountability in all operations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Karim Tazi",
    role: "Communications Director",
    bio: "Karim leads the foundation's communications strategy, raising awareness about its mission and impact.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Nadia Chaoui",
    role: "Volunteer Coordinator",
    bio: "Nadia manages the foundation's extensive network of volunteers, the backbone of its operations.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

// Values data
const values = [
  {
    title: "Compassion",
    description:
      "We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.",
    icon: "❤️",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our operations, ensuring transparency and accountability.",
    icon: "✓",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in all our programs and services, continuously improving to better serve our communities.",
    icon: "★",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of partnerships and work closely with communities, organizations, and institutions.",
    icon: "🤝",
  },
  {
    title: "Innovation",
    description:
      "We embrace innovative approaches to address complex social challenges and create sustainable solutions.",
    icon: "💡",
  },
  {
    title: "Empowerment",
    description: "We focus on empowering individuals and communities to become self-reliant and resilient.",
    icon: "⚡",
  },
]

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="pt-16">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About Hero Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
          >
            About Assalam Foundation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 text-center max-w-3xl mx-auto"
          >
            Dedicated to transforming lives and building futures across Morocco since 1992
          </motion.p>
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center" data-aos="fade-up">
            Our Story
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 50}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 z-10"></div>

                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                      <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-sm mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                      <p className="text-blue-700">{event.description}</p>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Mission</h2>
              <p className="text-blue-900 text-lg mb-6">
                At Assalam Foundation, we believe in a world where every individual, regardless of where they live, has
                access to essential resources to thrive. Our mission is to empower vulnerable communities through
                sustainable development projects and comprehensive support programs.
              </p>
              <p className="text-blue-900 text-lg">
                We are committed to addressing the root causes of poverty and inequality by implementing holistic
                approaches that create lasting change in the lives of those we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-green-600 mb-6">Our Vision</h2>
              <p className="text-blue-900 text-lg mb-6">
                We envision a Morocco where all communities have equal opportunities to thrive, where poverty is
                eliminated, and where every individual can reach their full potential. We strive to be a catalyst for
                positive change, fostering self-reliance and sustainable development.
              </p>
              <p className="text-blue-900 text-lg">
                Through our various projects and initiatives, we aim to create lasting impact that transforms lives and
                builds stronger, more resilient communities for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center" data-aos="fade-up">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-blue-100">{member.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-blue-700">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-400 mb-12 text-center" data-aos="fade-up">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-blue-800 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-green-400 mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Mission</h2>
            <p className="text-xl text-blue-700 mb-8">
              Together, we can make a difference in the lives of vulnerable communities across Morocco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/contact">Get Involved</Link>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/projects">Explore Our Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

