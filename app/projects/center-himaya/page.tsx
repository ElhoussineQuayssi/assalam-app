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
  "/centre-himaya-1.jpg",
  "/centre-himaya-2.jpg",
  "/centre-himaya-3.jpg",
  "/centre-himaya-4.jpg",
  "/centre-himaya-5.jpg",
  "/centre-himaya-6.jpg",
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
            Centre Himaya
          </motion.h1>
          <p className="text-xl text-blue-100 mb-6 text-center">
            Un centre pluridisciplinaire de soutien aux femmes et enfants en situation difficile.
          </p>
        </div>
      </section>

      {/* General Objective */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Objectif Général du Centre
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              Développer les capacités personnelles et les compétences des femmes et des filles victimes de violences sous toutes leurs formes, ainsi que des femmes et des enfants en situation difficile.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Objectives */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Objectifs Spécifiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Garantir des services d’accueil, d’écoute, d’orientation, de conseil, d’accompagnement, de médiation familiale et de soutien psycho-social.",
                  "Permettre aux femmes et filles victimes de violence ainsi qu’aux enfants en situation difficile d’exprimer les difficultés qu’ils rencontrent.",
                  "Offrir des consultations individuelles et collectives avec des formateurs et spécialistes en soutien psychologique, social, développement personnel, conseil familial et juridique.",
                  "Assurer une formation professionnelle pour développer les compétences personnelles et techniques des femmes et enfants en situation difficile.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <ul className="space-y-4">
                {[
                  "Sensibiliser et informer les femmes et filles victimes de violence sur leurs droits et renforcer leurs compétences personnelles et techniques.",
                  "Aider à diagnostiquer les problèmes, suivre les démarches de protection et de traitement, réduire la violence et trouver des solutions légales.",
                  "Faciliter la réintégration socio-économique et réparer les préjudices individuels et collectifs.",
                  "Participer aux travaux des commissions locales de lutte contre la violence.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Target Population */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Population Cible
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Femmes et filles victimes de violence.",
                  "Femmes et enfants en situation difficile.",
                  "Veuves et orphelins bénéficiaires des services de l’association.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <ul className="space-y-4">
                {[
                  "Familles et proches des femmes et filles victimes de violence ou en situation difficile.",
                  "Personnel des centres d’écoute.",
                  "Différents intervenants dans le domaine de la lutte contre la violence, au niveau local, régional et national.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team and Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Équipe et Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Équipe de Travail</h3>
              <ul className="space-y-4">
                {[
                  "Coordinatrice.",
                  "Assistantes sociales.",
                  "Avocate.",
                  "Spécialistes en conseil familial.",
                  "Psychologues.",
                  "Formateurs spécialisés en développement personnel.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Services Offerts</h3>
              <ul className="space-y-4">
                {[
                  "Accueil et écoute des femmes et filles victimes de violence.",
                  "Soutien psychologique et consultations juridiques.",
                  "Formations en développement personnel et professionnel.",
                  "Sensibilisation sur les droits des femmes et des filles.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
              Votre soutien peut aider les femmes et enfants en situation difficile à retrouver une vie digne et épanouissante.
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