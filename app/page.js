import Footer from "@/components/Footer";
import AboutUs from "@/components/HomeComponents/AboutUs";
import Actualites from "@/components/HomeComponents/Actualites";
import Bar from "@/components/HomeComponents/Bar";
import Hero from "@/components/HomeComponents/Hero";
import Projects from "@/components/HomeComponents/Projects";
import Vision from "@/components/HomeComponents/Vision";
import Navbar from "@/components/Navbar";
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
