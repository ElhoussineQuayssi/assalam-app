"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Gallery images (replace with actual image paths)
const galleryImages = [
  "/fataer-al-baraka-1.jpg",
  "/fataer-al-baraka-2.jpg",
  "/fataer-al-baraka-3.jpg",
  "/fataer-al-baraka-4.jpg",
  "/fataer-al-baraka-5.jpg",
  "/fataer-al-baraka-6.jpg",
]

export default function Page() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="pt-16">
      <Header />
      {/* Project Overview */}
      <section className="relative py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center"
          >
            Fataer Al Baraka
          </motion.h1>
          <p className="text-xl text-blue-100 mb-6 text-center">
            Un projet d’espoir et de renouveau pour les femmes en situation précaire.
          </p>
        </div>
      </section>

      {/* Mission and Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Mission et Objectifs
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <ul className="space-y-4">
              {[
                "Offrir une formation professionnelle de qualité en pâtisserie et gâteaux marocains.",
                "Contribuer à l’autonomisation économique des femmes en difficulté.",
                "Préserver et valoriser l’art culinaire marocain.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Programme de Formation
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              La formation au sein de Fataer Al Baraka s’étale sur une période de 9 mois, au cours desquels les participantes acquièrent :
            </p>
            <ul className="space-y-4">
              {[
                "Les techniques de base et avancées de la pâtisserie marocaine.",
                "Des compétences en gestion et en entrepreneuriat pour développer des projets individuels ou collectifs.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Certification and Recognition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Certification et Reconnaissance
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              En fin de formation, un examen organisé et supervisé en partenariat avec l’Entraide Nationale permet aux participantes d’obtenir un diplôme certifié et officiellement reconnu. Ce diplôme constitue un véritable passeport vers l’emploi et l’autonomie.
            </p>
          </div>
        </div>
      </section>

      {/* After Training */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Après la Formation
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              Grâce à cette formation, les participantes peuvent :
            </p>
            <ul className="space-y-4">
              {[
                "Se regrouper pour former des coopératives dans le secteur culinaire.",
                "Lancer leurs propres projets à domicile, en proposant des pâtisseries traditionnelles aux particuliers et aux professionnels.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Galerie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Impact Social
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <ul className="space-y-4">
              {[
                "Lutter contre la précarité en offrant des opportunités professionnelles concrètes.",
                "Renforcer l’esprit de solidarité et de coopération au sein des communautés locales.",
                "Valoriser le rôle des femmes dans le développement économique et social.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Comment Nous Soutenir</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Votre soutien peut aider les femmes en situation précaire à retrouver une autonomie économique et un avenir prometteur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
                <Link href="/contact">Faire un Don</Link>
              </Button>
              <Button
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link href="/contact">Devenir Bénévole</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}