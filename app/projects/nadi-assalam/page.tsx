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
  "/nadi-assalam-1.jpg",
  "/nadi-assalam-2.jpg",
  "/nadi-assalam-3.jpg",
  "/nadi-assalam-4.jpg",
  "/nadi-assalam-5.jpg",
  "/nadi-assalam-6.jpg",
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
            Nadi Assalam
          </motion.h1>
          <p className="text-xl text-blue-100 mb-6 text-center">
            Un avenir cousu d’espoir pour les femmes en situation précaire.
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
                "Transmettre un savoir-faire en couture, mêlant traditions marocaines et techniques modernes.",
                "Favoriser l’autonomisation des femmes en difficulté grâce à une formation professionnalisante.",
                "Contribuer à l’épanouissement personnel et professionnel des participantes.",
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
              La formation au sein de Nadi Assalam s’étale sur une période de 9 mois, pendant lesquels les participantes apprennent :
            </p>
            <ul className="space-y-4">
              {[
                "Les techniques de couture traditionnelle marocaine (caftans, djellabas, takchitas, etc.).",
                "Les bases et les avancées de la couture moderne (vêtements prêt-à-porter, accessoires, etc.).",
                "Des notions de design, de gestion et d’entrepreneuriat pour monter leur propre activité.",
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
              À l’issue de la formation, un examen supervisé par l’Entraide Nationale est organisé. Les participantes qui réussissent obtiennent un diplôme officiel reconnu, ouvrant les portes d’un avenir prometteur dans le domaine de la couture.
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
              Le diplôme en main, les femmes formées par Nadi Assalam peuvent :
            </p>
            <ul className="space-y-4">
              {[
                "Se regrouper en coopératives pour produire et vendre des créations artisanales et modernes.",
                "Lancer leurs propres projets depuis leur domicile, en proposant des services de couture adaptés aux besoins de leur communauté.",
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

      {/* Social and Economic Impact */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Impact Social et Économique
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <ul className="space-y-4">
              {[
                "Lutter contre la précarité en offrant aux femmes des opportunités concrètes de revenus.",
                "Renforcer la solidarité au sein des communautés en encourageant les collaborations locales.",
                "Valoriser le patrimoine vestimentaire marocain tout en intégrant des approches modernes.",
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