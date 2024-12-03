import Footer from "@/components/HomeComponents/Footer";
import AboutUs from "@/components/HomeComponents/HomeSections/AboutUs";
import Actualites from "@/components/HomeComponents/HomeSections/Actualites";
import Bar from "@/components/HomeComponents/HomeSections/Bar";
import Hero from "@/components/HomeComponents/HomeSections/Hero";
import Projects from "@/components/HomeComponents/HomeSections/Projects";
import Vision from "@/components/HomeComponents/HomeSections/Vision";
import Navbar from "@/components/HomeComponents/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <Navbar/>
    <Hero/>
    <Vision/>
    <hr/>
    <AboutUs/>
    <hr/>
    <Projects/>
    <hr/>
    <Actualites/>
    <hr/>
    <Bar/>
    <Footer/>
  </main>
  );
}
