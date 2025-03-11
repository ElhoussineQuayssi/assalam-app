import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Assalam Foundation</h3>
            <p className="text-blue-100">
              Transforming Lives, Building Futures. We work to provide essential resources and create sustainable impact
              in vulnerable communities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-100 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-100 hover:text-green-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-green-400" />
                <span className="text-blue-100">Casablanca, Morocco</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-blue-100">+212 707 913 840</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <span className="text-blue-100">info@assalamfoundation.org</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">Newsletter</h3>
            <p className="text-blue-100">Subscribe to our newsletter to receive updates on our projects and events.</p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-blue-800 border-blue-700 text-white placeholder:text-blue-300"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Assalam Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

