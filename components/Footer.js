import Image from "next/image"
import logo from './Assets/logo.png'
import Link from "next/link"
import { IoLogoFacebook ,IoLogoInstagram ,IoLogoTwitter ,IoLogoYoutube } from "react-icons/io";


function Footer(){
    return(
        <footer className='footer bg-slate-300 h-fit w-full flex flex-col justify-center items-center'>
            <div className="flex justify-center items-center p-3">
                <Image src={logo} width={150} height={50} alt='Association Assalam'/>    
            </div>  
            <div className="flex justify-between items-start p-3 flex-row w-3/4">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <h6 className="font-bold pb-2">Pages</h6>
                    <Link href='/'><p className="hover:underline">Accueil</p></Link>
                    <Link href='/nous_sommes'><p className="hover:underline">Nous Sommes</p></Link>
                    <Link href='/projects'><p className="hover:underline">Projets</p></Link>
                    <Link href='/Actualites'><p className="hover:underline">Actualités</p></Link>
                    <Link href='/contact'><p className="hover:underline">Contact</p></Link>
                </div>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <h6 className="font-bold pb-2 text-center">Contact</h6>
                    <p>Mail : Assalam@mail.com</p>
                    <p>tel : +33 612 234 567</p>
                    <p>Adresse : 12 rue de la Légion d'Honneur, Paris, 75009</p>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <h6 className="font-bold pb-2 text-center">Reseaux Sociaux</h6>
                    <div className="flex flex-row gap-2">
                        <Link href='#'><IoLogoFacebook className="w-8 h-8 hover:text-blue-500"/></Link>
                        <Link href='#'><IoLogoInstagram className="w-8 h-8 hover:text-pink-500" /></Link>
                        <Link href='#'><IoLogoTwitter className="w-8 h-8 hover:text-cyan-300"/></Link>
                        <Link href='#'><IoLogoYoutube className="w-8 h-8 hover:text-red-600"/></Link>
                    </div>
                </div>
            </div>  
            <div className="h-16 bg-slate-600 text-white w-full flex flex-row justify-around items-center">
                <p>Designed by Quayssi</p>
                <div className="divider text-swhite"></div>
                <p>Copyright © 2024 Assalam</p>
            </div>  
        </footer>
    )
}


export default Footer