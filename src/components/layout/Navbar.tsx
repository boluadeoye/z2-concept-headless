"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = variant === "transparent"
    ? "absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent text-white"
    : "relative bg-ink text-white border-b border-white/10";

  return (
    <nav className={`${navClasses} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-2xl font-black text-accent tracking-tighter">Z2</span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-light">
            Concept x Kefee HP
          </span>
        </Link>

        {/* Central Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Store", href: "/store" },
            { name: "Blog", href: "/blog" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-widest text-white/80 hover:text-accent transition-colors flex items-center gap-0.5"
            >
              {link.name}
              <span className="text-[9px] opacity-40 font-light">\</span>
            </Link>
          ))}
        </div>

        {/* Action Elements */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-white hover:text-accent transition-colors">
            <Search size={18} />
          </button>
          <Link href="/store" className="text-white hover:text-accent transition-colors relative">
            <ShoppingBag size={18} />
          </Link>
          <Link
            href="/contact"
            className="border border-white/20 rounded-full px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 flex items-center gap-1.5"
          >
            Contact Us
            <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <Link href="/store" className="text-white relative p-2">
            <ShoppingBag size={18} />
          </Link>
          <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-ink border-b border-white/10 p-6 flex flex-col gap-6 z-50">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Store", href: "/store" },
            { name: "Blog", href: "/blog" },
            { name: "Contact Us", href: "/contact" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-white hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
