"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 mx-auto mt-6 max-w-4xl rounded-2xl bg-background/80 border shadow-xl transition-all animate-float"
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }}
    >
      <div className="container flex h-16 items-center justify-between px-6">
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/" className="flex items-center group cursor-pointer">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
              whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
            >
              <Image
                src="/numo-logo.png"
                alt="Numo Logo"
                width={40}
                height={40}
                className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <motion.span 
              className="text-lg font-bold -ml-1 transition-transform duration-300 group-hover:scale-110"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              umo
            </motion.span>
          </Link>
        </motion.div>
        <nav className="hidden md:flex items-center gap-7 ml-12">
          <Link
            href="#features"
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all after:duration-300"
          >
            Features
          </Link>
          <Link
            href="#strategies"
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all after:duration-300"
          >
            Strategies
          </Link>
          <Button
            asChild
            variant="default"
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 hover:from-cyan-400 hover:via-blue-400 hover:to-cyan-400 text-white px-6 py-1.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/60 focus-visible:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus-visible:-translate-y-1 focus-visible:scale-105"
          >
            <Link href="#waitlist">
              Waitlist
            </Link>
          </Button>
        </nav>
      </div>
    </motion.header>
  )
}
