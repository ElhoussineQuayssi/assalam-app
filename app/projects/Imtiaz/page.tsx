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
  "/imtiaz-event-1.jpg",
  "/imtiaz-event-2.jpg",
  "/imtiaz-student-1.jpg",
  "/imtiaz-student-2.jpg",
  "/imtiaz-achievement-1.jpg",
  "/imtiaz-achievement-2.jpg",
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
            Projet Imtiaz
          </motion.h1>
          <p className="text-xl text-blue-100 mb-6 text-center">
            Parrainage des étudiants brillants issus de milieux défavorisés.
          </p>
        </div>
      </section>

      {/* General Objective */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Objectif Général du Projet
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              Le projet Imtiaz a pour mission d’accompagner les étudiants les plus brillants vivant en situation difficile ou issus de milieux défavorisés jusqu’à leur insertion professionnelle.
            </p>
            <p className="mb-6">
              L’objectif principal est d’insuffler un esprit d'appartenance et d'initiative en eux, et de les activer dans la réforme et le développement.
            </p>
            <p>
              Nous visons à travers les différentes formations du projet d’élaborer le leader de demain : un leader missionnaire engagé avec une bonne moralité, l'excellence académique, une bonne santé et une efficacité au sein de la famille et de la société.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-blue-50">
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

      {/* Specific Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Objectifs Spécifiques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Développer le niveau éducatif et l'aspect éthique des jeunes, et œuvrer pour leur inculquer les plus hautes valeurs humaines.",
                  "Œuvrer pour le développement des compétences éducatives, comportementales et relationnelles.",
                  "Enseigner un ensemble de compétences pour interagir avec soi-même et avec l'autre.",
                  "Enseigner les compétences de gérer son plan d’action dans la vie afin d’atteindre ses objectifs.",
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
                  "Autonomiser les jeunes à travers le coaching et des conseils individuels.",
                  "Aider dans l’acquisition des besoins nécessaires des étudiants afin d'améliorer leurs conditions éducatives (fournitures scolaires, PC, imprimantes, connexion Internet...).",
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

      {/* Student Expectations */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Attentes des Étudiants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Information et orientation des futurs bacheliers.",
                  "Accéder à des établissements de formation de qualité.",
                  "Soutien financier pour subvenir à leurs besoins.",
                  "Accompagnement et conseil pour les choix d’option et l’insertion dans la vie professionnelle.",
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
                  "Augmenter les chances de succès dans la vie professionnelle.",
                  "Coaching individuel et accompagnement.",
                  "Séances de formations en développement personnel.",
                  "Soutien en langues.",
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

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Notre Engagement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Des rencontres d’information et d’orientation pour les candidats au Baccalauréat.",
                  "Un plan de formation annuel sur les différents axes de la roue de la vie.",
                  "Une bourse mensuelle pour subvenir aux besoins minimaux des étudiants (transport, nourriture...).",
                  "Un accompagnement visant l’accès au logement en cas de problèmes majeurs.",
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
                  "Un équipement informatique selon les disponibilités.",
                  "Le coaching ou l’accompagnement psychologique par un professionnel.",
                  "Mise à niveau linguistique.",
                  "Aide à la recherche de stage et d’emplois.",
                  "Renforcement du Leadership.",
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

      {/* Eligibility Criteria */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Critères d’Éligibilité et de Sélection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Critère Académique</h3>
              <ul className="space-y-4">
                {[
                  "La note.",
                  "La filière.",
                  "Le projet de vie.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-blue-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Critère Social</h3>
              <ul className="space-y-4">
                {[
                  "Orphelins ou étudiants issus des structures de protection sociale.",
                  "Étudiants démunis en situation d’handicap.",
                  "Étudiants en situations difficiles : pauvreté, exclusion sociale, parents divorcés ou malades...",
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
              Votre soutien peut aider les étudiants brillants issus de milieux défavorisés à réaliser leur plein potentiel.
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