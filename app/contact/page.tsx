"use client"

import type React from "react"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Form submitted! This is a demo.")
  }

  return (
    <div className="pt-16">
      <Header />
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Contact Hero Background"
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8 text-center max-w-3xl mx-auto"
          >
            We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries.
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

      {/* Contact Form and Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-blue-900 font-medium">
                        Your Name
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-blue-900 font-medium">
                        Your Email
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-blue-900 font-medium">
                        Subject
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="Enter subject"
                          required
                          className="border-blue-200 focus:border-blue-500"
                        />
                      </motion.div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-blue-900 font-medium">
                        Your Message
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                        <Textarea
                          id="message"
                          placeholder="Enter your message"
                          required
                          className="min-h-[150px] border-blue-200 focus:border-blue-500"
                        />
                      </motion.div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Information</h2>
                <p className="text-blue-700 mb-8">
                  Feel free to reach out to us through any of the following channels. We're here to answer your
                  questions and assist you in any way we can.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">Our Location</h3>
                    <p className="text-blue-700">152, Rue Yacoub El Mansour, Maârif, Casablanca, Morocco</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">Email Us</h3>
                    <p className="text-blue-700">info@assalamfoundation.org</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">Call Us</h3>
                    <p className="text-blue-700">+212 707 913 840</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900">Working Hours</h3>
                    <p className="text-blue-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-blue-700">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-blue-700">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-600 text-white p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-400 text-white p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-pink-600 text-white p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-700 text-white p-3 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Find Us
          </h2>
          <div data-aos="zoom-in" className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=500&width=1200" alt="Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-blue-900">Assalam Foundation</h3>
                <p className="text-blue-700">152, Rue Yacoub El Mansour, Maârif, Casablanca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I donate to the foundation?",
                answer:
                  "You can donate through our website, bank transfer, or visit our office in person. All donation methods are secure and transparent.",
              },
              {
                question: "Can I volunteer with the foundation?",
                answer:
                  "Yes, we welcome volunteers! Please fill out the contact form or call us to discuss volunteer opportunities that match your skills and interests.",
              },
              {
                question: "How are donations used?",
                answer:
                  "100% of your donations go directly to our projects. We maintain transparent financial records and provide regular updates on how funds are utilized.",
              },
              {
                question: "Do you provide tax receipts for donations?",
                answer:
                  "Yes, we provide official tax receipts for all donations in accordance with Moroccan tax regulations.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{faq.question}</h3>
                <p className="text-blue-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

