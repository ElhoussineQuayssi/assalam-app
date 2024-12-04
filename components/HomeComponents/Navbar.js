import Image from 'next/image'
import React from 'react'
import logo from "../Assets/logo.png"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-32 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Link href="/nous_sommes">Nous sommes</Link></li>
            <li><Link href='/actualites'>Actualités</Link></li>
            <li>
              <Link href='/projets'>Projets</Link>
              <ul className="p-2">
                <li><Link href='/projets/1'>Submenu 1</Link></li>
                <li><Link href='/projets/2'>Submenu 2</Link></li>
                <li><Link href='/projects/3'>Submenu 3</Link></li>
              </ul>
            </li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
        <Link href='/' className="ml-5 text-xl "><Image src={logo} alt="Fondation Assalam" width={100} height={50}/></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li><Link href='/nous_sommes'>Nous sommes</Link></li>
          <li><Link href="/actualites">Actualités</Link></li>
          <li>
            <details>
              <summary><Link href='/projets'>Projects</Link></summary>
              <ul className="p-2 z-10">
                <li><Link href='/projets/1'>Submenu 1</Link></li>
                <li><Link href='/projets/2'>Submenu 2</Link></li>
                <li><Link href='/projets/3'>Submenu 3</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar