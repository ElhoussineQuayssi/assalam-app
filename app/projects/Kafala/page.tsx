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
  "/kafala-1.jpg",
  "/kafala-2.jpg",
  "/kafala-3.jpg",
  "/kafala-4.jpg",
  "/kafala-5.jpg",
  "/kafala-6.jpg",
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
            Projet de Parrainage d'Orphelins
          </motion.h1>
          <p className="text-xl text-blue-100 mb-6 text-center">
            Offrir une égide globale aux orphelins au sein de leurs familles.
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
              Le projet de parrainage d’orphelins vise à fournir une assistance globale aux orphelins pour leur permettre de s’épanouir dans leur environnement naturel, leur famille. Cette assistance inclut un soutien social, éducatif, psychologique et médical.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Formulas */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Formules de Parrainage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <ul className="space-y-4">
                {[
                  "Parrainage global : Couvre les besoins de base et les besoins ponctuels.",
                  "Parrainage de base : Couvre les besoins de base de l’orphelin (nourriture, éducation, santé).",
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
                  "Parrainage scolaire : Permet à l’orphelin de poursuivre sa scolarité dans une école privée.",
                  "Parrainage famille : Couvre les besoins de base d’une famille d’orphelins (2 et plus).",
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

      {/* Occasional Sponsorship */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Parrainage Ponctuel
          </h2>
          <div className="max-w-2xl mx-auto text-blue-900">
            <p className="mb-6">
              Toute personne peut contribuer occasionnellement à un ou plusieurs projets ponctuels de la Fondation pour couvrir les besoins des orphelins lors des occasions suivantes :
            </p>
            <ul className="space-y-4">
              {[
                "Rentrée scolaire : Achat de fournitures.",
                "Eid Al Adha : Achat de mouton.",
                "Eid Al Fitr : Achat de vêtements.",
                "Camp d’été : 10 jours de camping.",
                "Panier du Ramadan : Distribution de paniers alimentaires (500 Dhs).",
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

      {/* Annex Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center" data-aos="fade-up">
            Projets Annexes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Rentrée Scolaire</h3>
              <p className="text-blue-900">
                Distribution de cartables scolaires pour encourager la poursuite des études et lutter contre le décrochage scolaire.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Panier du Ramadan</h3>
              <p className="text-blue-900">
                Distribution de paniers alimentaires pour subvenir aux besoins des familles pendant le mois sacré du Ramadan.
              </p>
            </div>
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Campings d’Été</h3>
              <p className="text-blue-900">
                Organisation de campings d’été pour les orphelins et les enfants démunis.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Farhat Al Aid</h3>
              <p className="text-blue-900">
                Distribution de vêtements neufs et de chaussures à l’occasion de l’Aid El Fitr.
              </p>
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
              Votre soutien peut aider les orphelins et les familles démunies à retrouver une vie digne et épanouissante.
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