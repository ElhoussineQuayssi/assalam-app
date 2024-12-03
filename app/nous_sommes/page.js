// pages/nous-sommes.js
"use client"
import Navbar from '../../components/HomeComponents/Navbar';
import Footer from '../../components/HomeComponents/Footer';
import Image from 'next/image';
import photo from '../../public/logo.png';
import { useState } from 'react';
import { Nmessage, Nbut, Nvision } from '@/components/NousSommesComponents/Screen'
import { gridData } from '@/Constants';
import { AiFillAlert } from 'react-icons/ai';

const NousSommes = () => {

  const [Button, setButton] = useState(1);

  return (
    <>
      <Navbar />
      <div className="relative isolate overflow-hidden bg-gray-200 text-slate-800 py-24 sm:py-32 bg-[url('/')]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 text-slate-800">
            <h2 className="text-5xl font-semibold tracking-tight text-slate-800 sm:text-7xl">assalam Fondation</h2>
            <p className="mt-8 text-pretty text-lg font-medium text-slate-800 sm:text-xl/8">L'institut cherche à contribuer à l'amélioration des conditions des individus et des familles en situation de vulnérabilité. Il œuvre pour la réalisation de leur dignité humaine dans le cadre d'un développement durable et inclusif, dans un environnement sain, avec des engagements clairs basés sur les valeurs de la société marocaine, fondées sur la solidarité et l'entraide, en accordant une grande importance à la confiance de ses partenaires et des bénéficiaires de ses services, et en visant à atteindre l'excellence et le leadership.</p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-slate-800">motatawi3</dt>
                <dd className="text-4xl font-semibold tracking-tight text-slate-800">+300</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-slate-800">far3 lil mo2asasa</dt>
                <dd className="text-4xl font-semibold tracking-tight text-slate-800">+35</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-slate-800">baramij monjaza</dt>
                <dd className="text-4xl font-semibold tracking-tight text-slate-800">90%</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-slate-800">osra mostafida</dt>
                <dd className="text-4xl font-semibold tracking-tight text-slate-800">+450</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className='w-full h-fit md:h-screen flex md:flex-row flex-col items-center justify-evenly bg-slate-800 gap-4 p-4 shadow-inner shadow-black'>
        <div className='flex-1 flex md:flex-col justify-evenly items-start gap-1  w-full h-full'>
          <button className={`btn md:w-1/2 bg-gray-200 relative hover:left-0 transition-all duration-500 ease-out ${Button == 1 ? 'md:left-0 md:bottom-0 bottom-[-25px]' : "md:left-[-50px]"}`} onClick={() => {
            setButton(1)
          }
          }>Notre Message</button>
          <button className={`btn md:w-1/2 bg-gray-200 relative hover:left-0 transition-all duration-500 ease-out ${Button == 2 ? 'md:left-0 bottom-[-25px] md:bottom-0' : "md:left-[-50px]"}`} onClick={() => {
            setButton(2)
          }
          }>Notre Vision</button>
          <button className={`btn md:w-1/2 bg-gray-200 relative hover:left-0 transition-all duration-500 ease-out ${Button == 3 ? 'md:left-0 bottom-[-25px] md:bottom-0' : "md:left-[-50px]"}`} onClick={() => {
            setButton(3)
          }
          }>Notre Buts</button>
        </div>
        <div className='flex-1 transition-all duration-700 ease-out relative md:left-[-50px]  '>
          {Button == 1 ? <Nmessage /> : Button == 2 ? <Nvision /> : <Nbut />}
        </div>
      </div>
      <div className='h-screen w-full flex flex-col justify-center items-center gap-10 bg-slate-300'>
        <div className='text-lg w-1/2'>lorem pzvnizv virbviurv hhbfzbvuigr uivbzrubvurv vibruibvuizr vbvruibvru iubvriubv vibuirbv ivbruibv ovizeovz ovbuobvzpjz^vj obvobv vzovbzrovb oborbv</div>
        <div><h1 className='text-2xl'>Nous sommes</h1></div>
        <div className='w-3/4 mx-auto grid grid-cols-4 h-64 gap-1 border-slate-500 p-1 bg-slate-500'>
          {gridData.map((item, index) => {
            return (
              <div className='flex flex-col justify-evenly h-full hover: bg-white hover:skew-y-1 transition-all duration-700' key={index}>
                <span className='flex justify-center'>{item.icon}</span>
                <p className='text-center text-lg'>{item.text}</p>
              </div>
            )
          }
          )}
        </div>
      </div>
      <div className='p-10 bg-green-400 flex flex-col justify-center items-center gap-10 '>
          <h1 className='text-bold text-3xl'>tawajohatona al istratijiya</h1>
          <div className='flex flex-row justify-center items-center h-60'>
            <div className='flex-1 hover:translate-y-2 transition-all duration-500 m-2 border-4 border-blue-600 flex flex-col justify-center items-center h-full bg-blue-300'>
              <div className='flex-1 flex justify-center items-center'>
                <AiFillAlert className='w-12 h-12'/>
              </div>
              <h1 className='flex-1 text-xl text-center'>Hola Hola Hola Hola Hola Hola Hola Hola Hala</h1>
            </div>
            <div className='hover:translate-y-2 transition-all duration-500 flex-1 m-2 border-4 border-blue-600 flex flex-col justify-center items-center h-full bg-blue-300'>
              <div className='flex-1 flex justify-center items-center'>
                <AiFillAlert className='w-12 h-12'/>
              </div>
              <h1 className='flex-1 text-xl text-center'>Hola Hola Hola Hola Hola Hola Hola Hola Hala</h1>
            </div>
            <div className='flex-1 hover:translate-y-2 transition-all duration-500 m-2 flex flex-col justify-center items-center h-full bg-blue-300 border-4 border-blue-600'>
              <div className='flex-1 flex justify-center items-center'>
                <AiFillAlert className='w-12 h-12'/>
              </div>
              <h1 className='flex-1 text-xl text-center'>Hola Hola Hola Hola Hola Hola Hola Hola Hala</h1>
            </div>
            <div className='hover:translate-y-2 transition-all duration-500 flex-1 m-2 flex flex-col justify-center items-center h-full bg-blue-300  border-4 border-blue-600'>
              <div className='flex-1 flex justify-center items-center'>
                <AiFillAlert className='w-12 h-12'/>
              </div>
              <h1 className='flex-1 text-xl text-center'>Hola Hola Hola Hola Hola Hola Hola Hola Hala</h1>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default NousSommes;
