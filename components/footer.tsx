import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-playfair mb-4">S. Iguodala</h3>
            <p className="text-background/80 mb-6 max-w-md">
              Transforming Data into Impact: Empowering Agencies for Smarter Decisions and Stronger Results
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xl font-playfair mb-4">Quick Links</h4>
            <div className="grid grid-cols-3 gap-4">
              <Link href="/" className="text-background/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-background/80 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-background/80 hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-background/80 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-background/80 hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-background/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} S. Iguodala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
