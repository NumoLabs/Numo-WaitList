"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Header() {
  return (      <header className="sticky top-0 z-50 mx-auto mt-6 max-w-4xl rounded-2xl bg-background/80 border shadow-xl transition-all animate-float animate-header-fadein">
    <div className="container flex h-16 items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center group cursor-pointer">
          <Image
            src="/numo-logo.png"
            alt="Numo Logo"
            width={40}
            height={40}
            className="h-14 w-14 transition-transform duration-300 group-hover:scale-110 animate-logo-bounce"
          />
          <span className="text-lg font-bold -ml-1 transition-transform duration-300 group-hover:scale-110 animate-logo-bounce">
            umo
          </span>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-7 ml-12">
        {/* <Link
          href="#stats"
          className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:transition-all after:duration-300"
        >
          Statistics
        </Link> */}
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
      {/* <div className="flex items-center gap-6 ml-auto pl-12">
        {address && (
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 hover:from-black hover:via-gray-800 hover:to-black text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl focus-visible:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus-visible:-translate-y-1 focus-visible:scale-105 flex items-center gap-2 border border-gray-600 hover:border-gray-500">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
        )}
        <WalletConnector />
      </div> */}
    </div>
  </header>)
}
