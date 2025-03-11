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

// Gallery images
const galleryImages = [
  "/classroom-1.jpg",
  "/playground.jpg",
  "/art-activities.jpg",
  "/story-time.jpg",
]

// Impact metrics
const impactMetrics = [
  { values: 50, label: "Children Enrolled Annually" },
  { values: 2, label: "Dedicated Teachers" },
  { values: 1, label: "Teaching Assistant" },
  { values: 2, label: "Classrooms" },
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
            Jardin d’Enfants Rihana As-Salam
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p className="text-xl text-blue-100 mb-6">
                Le Jardin d’Enfants Rihana As-Salam, affilié à la Fondation AsSalam pour le Développement Social, section Casablanca-Anfa, a été inauguré en 2013 en partenariat avec la Direction Régionale d’Anfa à l’école El Bachiri.
              </p>
              <p className="text-xl text-blue-100 mb-6">
                Son objectif principal est de fournir un environnement éducatif et pédagogique sûr et inspirant pour les enfants d’âge préscolaire, tout en mettant l’accent sur le développement des compétences sociales, cognitives et émotionnelles à travers des activités dirigées et des jeux.
              </p>
            </div>
            <div data-aos="fade-left" className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/kindergarten.jpg"
                alt="Jardin d’Enfants Rihana As-Salam"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Impact Metrics */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Notre Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full bg-green-100 rounded-t-lg mx-auto mb-4 flex items-end"
                >
                  <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full bg-green-500 rounded-t-lg"
                  />
                </motion.div>
                <motion.h3
                  initial={{ value: 0 }}
                  whileInView={{ value: metric.values }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="text-4xl font-bold text-green-600 mb-2"
                >
                  {metric.value}
                </motion.h3>
                <p className="text-blue-900">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives and Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Objectifs</h2>
              <ul className="space-y-4">
                {[
                  "Développer les compétences des enfants dans les domaines du langage, des mathématiques et des arts.",
                  "Renforcer les compétences de coopération et de travail en équipe.",
                  "Encourager la pensée critique et la créativité chez les enfants.",
                  "Construire une relation saine entre l’enfant et son environnement éducatif.",
                  "Améliorer le niveau d’apprentissage des enfants avant l’entrée en école primaire.",
                  "Favoriser les relations sociales entre les enfants.",
                  "Découvrir les talents et compétences spécifiques des enfants dès leur jeune âge.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold text-green-600 mb-6">Programme Éducatif</h2>
              <p className="text-blue-900 mb-4">
                Le programme repose sur des méthodes pédagogiques approuvées, axées sur le développement des compétences de base :
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">Lecture, écriture, calcul.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-blue-900">Activités récréatives : dessin, musique, théâtre.</span>
                </li>
              </ul>
              <p className="text-blue-900 mb-4">
                Le programme vise à développer les compétences linguistiques, sociales et émotionnelles des enfants, encourager la coopération et le travail en équipe, et stimuler la créativité et la sensibilité artistique à travers des activités manuelles, du coloriage et des jeux éducatifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Activités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Activités Éducatives</h3>
              <ul className="space-y-4">
                <li>Séances d’apprentissage des lettres, des chiffres et des couleurs.</li>
                <li>Jeux éducatifs pour stimuler la pensée critique et la résolution de problèmes.</li>
                <li>Lectures d’histoires pour améliorer les capacités d’écoute et de concentration.</li>
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Activités Physiques et Sportives</h3>
              <ul className="space-y-4">
                <li>Jeux collectifs pour renforcer la coopération et les compétences motrices.</li>
                <li>Exercices physiques pour améliorer la coordination et la condition physique.</li>
              </ul>
            </div>
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Activités Sociales et Émotionnelles</h3>
              <ul className="space-y-4">
                <li>Renforcer les compétences de communication entre pairs.</li>
                <li>Sessions éducatives sur des valeurs comme l’amitié et le respect.</li>
                <li>Exercices de résolution de problèmes en groupe ou individuellement.</li>
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Activités Créatives et Artistiques</h3>
              <ul className="space-y-4">
                <li>Dessin et coloriage.</li>
                <li>Création d’œuvres manuelles avec des matériaux simples et sûrs.</li>
                <li>Activités musicales et dramatiques : chant, danse, théâtre.</li>
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
              Votre soutien peut nous aider à continuer à fournir une éducation de qualité aux enfants d’âge préscolaire et à étendre notre portée à davantage de communautés.
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
