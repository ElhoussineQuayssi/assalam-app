import ActualitesSection from "@/components/HomeComponents/ActualitesSection";
import Footer from "@/components/HomeComponents/Footer";
import Navbar from "@/components/HomeComponents/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="h-36 w-full bg-slate-400 flex justify-center items-center">
        <h1 className="text-center text-slate-50 text-3xl font-bold">Actualites de la fondation</h1>
      </div>
      <div className="min-h-screen w-full flex flex-col items-center p-6">
        <div className="w-3/4 text-center mb-8">
          <p className="text-slate-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores veniam. Vitae eum ipsum, aperiam vero facilis blanditiis tenetur, maxime, suscipit ullam velit necessitatibus. Saepe, cum consequuntur! Deleniti, nam amet!
          </p>
        </div>
        <div className="w-full">
          <ActualitesSection />
        </div>
      </div>
      <Footer />
    </>
  );
}