"use client";
import Navbar from '../../components/HomeComponents/Navbar';
import Image from 'next/image';
import Footer from '../../components/HomeComponents/Footer';
import photo from '../../public/logo.png';
import { useState } from 'react';
import Screen from '@/components/Screen/Screen';
import { fondateursData, gridData, tawajohatona } from '@/Constants';
import { motion } from 'framer-motion';

const NousSommes = () => {
  const [Button, setButton] = useState(1);

  // Framer Motion Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative isolate overflow-hidden bg-[url('/bg-nous.jpg')] bg-fixed bg-no-repeat bg-cover bg-right text-slate-800 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideIn}
            className="mx-auto max-w-2xl lg:mx-0 text-slate-800"
          >
            <h2 className="text-5xl font-bold tracking-tight text-blue-900 sm:text-7xl font-serif">
              Assalam Fondation
            </h2>
            <p className="mt-8 text-pretty text-lg font-semibold text-blue-800 sm:text-xl/8">
              L'institut cherche à contribuer à l'amélioration des conditions des individus et des familles en situation de vulnérabilité. Il œuvre pour la réalisation de leur dignité humaine dans le cadre d'un développement durable et inclusif, dans un environnement sain, avec des engagements clairs basés sur les valeurs de la société marocaine, fondées sur la solidarité et l'entraide, en accordant une grande importance à la confiance de ses partenaires et des bénéficiaires de ses services, et en visant à atteindre l'excellence et le leadership.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          >
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Bénévole auprès de l'organisation", value: "+300" },
                { label: "Branches de l'établissement", value: "+35" },
                { label: "Famille bénéficiaire", value: "+450" },
                { label: "Programmes terminés", value: "90%" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={slideIn}
                  className="flex flex-col-reverse gap-1 justify-center rounded-lg bg-blue-900 bg-opacity-25 hover:bg-opacity-75 transition-all duration-500 p-6"
                >
                  <dt className="text-base/7 text-slate-400 text-center">{item.label}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-slate-300 text-center">{item.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </motion.div>

      {/* Message, Vision, But Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`${Button == 1 ? 'bg-[url("/bg-nous1.jpeg")]' : Button == 2 ? 'bg-[url("/bg-nous2.JPG")]' : 'bg-[url("/bg-nous3.jpg")]'} relative w-full h-fit md:h-screen flex md:flex-row flex-col items-center justify-evenly bg-cover bg-slate-800 gap-4 p-4 shadow-inner shadow-black`}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex md:flex-col justify-evenly items-start gap-1 w-full h-full">
          {["Notre Message", "Notre Vision", "Notre Buts"].map((text, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn md:w-1/2 bg-gray-200 relative hover:left-0 transition-all duration-500 ease-out ${Button == index + 1 ? 'md:left-0 md:bottom-0 bottom-[-25px]' : "md:left-[-50px]"}`}
              onClick={() => setButton(index + 1)}
            >
              {text}
            </motion.button>
          ))}
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideIn}
          className="relative z-10 flex-1 transition-all duration-700 ease-out md:left-[-50px]"
        >
          {Button == 1 ? <Screen description="Hello" /> : Button == 2 ? <Screen description="Hello1" /> : <Screen description="Hello2" />}
        </motion.div>
      </motion.div>

      {/* Nos Valeurs Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="h-full py-10 w-full flex flex-col justify-center items-center gap-10 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <motion.div
          variants={slideIn}
          className="text-lg w-2/3 md:w-1/2 font-semibold text-center text-blue-900"
        >
          Être bénévole à la Fondation pour la Paix, c'est apporter soutien et réconfort aux plus vulnérables, comme les veuves et les orphelins, tout en étant un modèle pour la communauté.
        </motion.div>
        <motion.h1
          variants={slideIn}
          className="text-6xl font-bold text-blue-900"
        >
          Nos valeurs
        </motion.h1>
        <motion.div
          variants={fadeIn}
          className="w-3/4 overflow-hidden mx-auto grid grid-cols-2 md:grid-cols-4 h-full gap-4 p-4 rounded-xl"
        >
          {gridData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col rounded-lg shadow-lg shadow-black drop-shadow justify-evenly hover:bg-white hover:skew-y-2 transition-all duration-700 p-6 bg-blue-100"
            >
              <span className="flex justify-center p-2">
                <Image src={item.icon} alt="icon" width={80} height={80} />
              </span>
              <p className="text-center text-lg font-semibold capitalize text-blue-900">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Nos Orientations Stratégiques Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="p-10 bg-transparent flex flex-col justify-center items-center gap-10"
      >
        <motion.h1
          variants={slideIn}
          className="text-bold text-3xl text-green-900 font-bold"
        >
          Nos orientations stratégiques
        </motion.h1>
        <motion.div
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center md:h-60 h-full w-full"
        >
          {tawajohatona.map((item, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure className="px-10 pt-10">
                <Image src={item.icon} alt={item.description} width={80} height={80} />
              </figure>
              <div className="card-body items-center text-center">
                <p className="text-lg font-semibold">{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Membres du Bureau National Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full h-full flex flex-col items-center gap-14 p-6 bg-gradient-to-r from-blue-50 to-green-50"
      >
        <motion.h1
          variants={slideIn}
          className="text-3xl font-bold text-blue-900"
        >
          Membres du Bureau National de la Fondation
        </motion.h1>
        <motion.div
          variants={fadeIn}
          className="w-full md:w-2/3 h-full p-4 md:p-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 border-8 border-blue-500 rounded-lg bg-white"
        >
          {fondateursData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Photo */}
              <Image
                src={item.photo}
                alt={item.name}
                width={200}
                height={200}
                className="w-full h-48 md:h-48 lg:h-48 object-cover"
              />

              {/* Overlay with Name and Job */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 text-white p-4"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </>
  );
};

export default NousSommes;