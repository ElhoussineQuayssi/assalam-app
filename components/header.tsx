"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "/projects",
    subItems: [
      { name: "Kafala", href: "/projects/Kafala" },
      { name: "Imtiaz", href: "/projects/Imtiaz" },
      { name: "Centre Himaya", href: "/projects/Centre-Himaya" },
      { name: "Nadi Assalam", href: "/projects/Nadi-Assalam" },
      { name: "Fataer Al Baraka", href: "/projects/Fataer-Al-Baraka" },
      { name: "Rayhanat Assalam", href: "/projects/Rayhanat-Assalam" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

// Language options with flags
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("en") // Default language
  const [isProjectsOpen, setIsProjectsOpen] = useState(false) // For projects dropdown
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle language change
  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode)
    // Add logic to change the language (e.g., update the URL or context)
    console.log(`Language changed to: ${languageCode}`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Assalam Foundation
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.subItems && setIsProjectsOpen(true)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group flex items-center space-x-1",
                  pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600",
                )}
              >
                <span>{item.name}</span>
                {item.subItems && <ChevronDown size={16} className="mt-1" />}
              </Link>

              {/* Projects Dropdown */}
              {item.subItems && isProjectsOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
                  onMouseEnter={() => setIsProjectsOpen(true)} // Keep dropdown open when hovering over it
                  onMouseLeave={() => setIsProjectsOpen(false)} // Close dropdown when hovering out
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language Switcher (Desktop) */}
          <div className="relative group">
            <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600">
              <span>{languages.find((lang) => lang.code === selectedLanguage)?.flag}</span>
              <span>{languages.find((lang) => lang.code === selectedLanguage)?.name}</span>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors flex items-center justify-between",
                    pathname === item.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.subItems && <ChevronDown size={16} />}
                </Link>

                {/* Projects Dropdown (Mobile) */}
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Switcher (Mobile) */}
            <div className="flex flex-col space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600"
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}