import Image from 'next/image';
import React from 'react';
import logo from "../Assets/logo.png";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-32 mx-auto w-full px-8">
      {/* Logo et menu mobile */}
      <div className="navbar-start flex flex-row justify-between w-full md:w-auto">
        <div className="dropdown">
          {/* Bouton du menu mobile */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Menu déroulant mobile */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <li><Link href="/nous_sommes" className="text-lg font-serif hover:bg-base-200">Nous sommes</Link></li>
            <li><Link href='/actualites' className="text-lg font-serif hover:bg-base-200">Actualités</Link></li>
            <li>
              <details>
                <summary className="text-lg font-serif">Projets</summary>
                <ul className="p-2">
                  <li><Link href='/projets/1' className="text-lg font-serif hover:bg-base-200">Submenu 1</Link></li>
                  <li><Link href='/projets/2' className="text-lg font-serif hover:bg-base-200">Submenu 2</Link></li>
                  <li><Link href='/projets/3' className="text-lg font-serif hover:bg-base-200">Submenu 3</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href='/contact' className="text-lg font-serif hover:bg-base-200">Contact</Link></li>
          </ul>
        </div>
        {/* Logo */}
        <Link href='/' className="ml-5">
          <Image src={logo} alt="Fondation Assalam" width={120} height={60} className="rounded-lg" />
        </Link>
      </div>

      {/* Menu desktop */}
      <div className="navbar-end w-full hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link href='/nous_sommes' className="text-lg font-serif hover:bg-base-200 px-4 py-2 rounded-lg">
              Nous sommes
            </Link>
          </li>
          <li>
            <Link href="/actualites" className="text-lg font-serif hover:bg-base-200 px-4 py-2 rounded-lg">
              Actualités
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-lg font-serif px-4 py-2 rounded-lg">Projets</summary>
              <ul className="p-2 bg-base-100 rounded-box shadow-lg z-10">
                <li><Link href='/projets/1' className="text-lg font-serif hover:bg-base-200">Submenu 1</Link></li>
                <li><Link href='/projets/2' className="text-lg font-serif hover:bg-base-200">Submenu 2</Link></li>
                <li><Link href='/projets/3' className="text-lg font-serif hover:bg-base-200">Submenu 3</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/contact' className="text-lg font-serif hover:bg-base-200 px-4 py-2 rounded-lg">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;