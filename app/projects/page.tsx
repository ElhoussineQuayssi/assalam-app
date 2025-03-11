"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, stagger, useAnimate } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Project data
const projects = [
  {
    id: "kindergarten",
    title: "Rihana As-Salam Kindergarten",
    description:
      "Providing a safe and inspiring educational environment for preschool children, focusing on social, cognitive, and emotional development through guided activities and play.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Serving 50+ children annually",
  },
  {
    id: "himaya",
    title: "Himaya Center",
    description:
      "A multidisciplinary center supporting women and children in difficult situations through reception, listening, orientation, counseling, accompaniment, family mediation, and psycho-social support.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Helping 200+ women and children annually",
  },
  {
    id: "imtiaz",
    title: "Imtiaz Project",
    description:
      "Sponsoring brilliant students from disadvantaged backgrounds until their professional integration, providing financial support, equipment, coaching, and language training.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Supporting 100+ students in their education",
  },
  {
    id: "nadi-assalam",
    title: "Nadi Assalam",
    description:
      "A training center for traditional and modern sewing, designed to give hope and opportunities to widows or women in precarious situations, helping them gain economic autonomy.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Training 75+ women annually",
  },
  {
    id: "fataer-al-baraka",
    title: "Fataer Al Baraka",
    description:
      "A training center for Moroccan pastry production, serving as a springboard towards autonomy and personal fulfillment for women in precarious situations, particularly widows or vulnerable women.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Training 60+ women annually",
  },
  {
    id: "orphan-sponsorship",
    title: "Orphan Sponsorship",
    description:
      "Providing comprehensive support to orphans within their family environment, including social, educational, psychological, and medical assistance to help them thrive.",
    image: "/placeholder.svg?height=300&width=400",
    impact: "Supporting 500+ orphans",
  },
]

// Impact metrics
const impactMetrics = [
  { value: "10,000+", label: "Lives Impacted" },
  { value: "36", label: "Sections Across Morocco" },
  { value: "30+", label: "Years of Service" },
  { value: "6", label: "Major Programs" },
]

// Partners
const partners = [
  { name: "Ministry of Education", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Entraide Nationale", logo: "/placeholder.svg?height=100&width=200" },
  { name: "INDH", logo: "/placeholder.svg?height=100&width=200" },
  { name: "UN Women", logo: "/placeholder.svg?height=100&width=200" },
  { name: "UNICEF", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Local Government", logo: "/placeholder.svg?height=100&width=200" },
]

export default function ProjectsPage() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    const staggerCards = async () => {
      await animate("div.project-card", { opacity: [0, 1], y: [50, 0] }, { duration: 0.5, delay: stagger(0.1) })
    }

    staggerCards()
  }, [animate])

  return (
    <div className="pt-16">
      <Header />
      {/* Introduction Section */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              At Assalam Foundation, we implement a diverse range of projects aimed at empowering vulnerable communities
              and creating sustainable impact across Morocco.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/contact">Support Our Projects</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white" ref={scope}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
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
                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                      <p className="text-blue-900 font-medium">{project.impact}</p>
                    </div>
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

      {/* Impact Metrics Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Impact</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Through our various projects and initiatives, we've made a significant difference in communities across
              Morocco.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ value: 0 }}
                  whileInView={{ value: Number.parseInt(metric.value) || 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                >
                  <h3 className="text-4xl font-bold text-green-600 mb-2">{metric.value}</h3>
                </motion.div>
                <p className="text-blue-900">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners and Supporters Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Partners</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              We collaborate with various organizations and institutions to maximize our impact and reach.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-blue-50 rounded-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-16 w-full">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

