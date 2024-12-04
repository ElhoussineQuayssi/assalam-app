import Card from "@/components/HomeComponents/Card";
import Footer from "@/components/HomeComponents/Footer";
import Navbar from "@/components/HomeComponents/Navbar";
import ProjectCard from "@/components/HomeComponents/ProjectCard";

export default function page(){
    return(
        <>
            <Navbar/>
            <div className="h-36 w-full bg-slate-400 flex justify-center items-center">
                <h1 className="text-center text-slate-50 text-3xl font-bold">Projets de la fondation</h1>
            </div>
            <div className="h-screen w-full flex flex-col items-center p-6">
                <div className="w-3/4 text-center">
                    <h1 className="text-2xl font-bold p-2">Projets</h1>
                    <p className="text-slate-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, maiores veniam. Vitae eum ipsum, aperiam vero facilis blanditiis tenetur, maxime, suscipit ullam velit necessitatibus. Saepe, cum consequuntur! Deleniti, nam amet!</p>
                </div>
                <div className="flex flex-auto flex-row justify-center items-center h-60 w-4/5 gap-2"> 
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
            <Footer/>
        </>
    )
}