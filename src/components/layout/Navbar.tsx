"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-[2px] text-white border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-3xl font-black text-primary tracking-tighter transition-transform group-hover:scale-105">Z2</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold pt-1">
            CONCEPT X KEFEE HP
          </span>
        </Link>

        {/* Desktop Links with Custom Indicators */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Store", href: "/store" },
            { name: "Blog", href: "/blog" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-[12px] font-bold uppercase tracking-widest text-white/80 hover:text-accent transition-colors flex items-center gap-1 group"
            >
              {item.name} 
              <span className="text-[10px] opacity-40 group-hover:text-accent group-hover:opacity-100 transition-all">↘</span>
            </Link>
          ))}
        </div>

        {/* Actions & Pill Button */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/store" 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-accent hover:text-white transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={2.5} />
            </Link>
            <button 
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent-dark transition-colors"
            >
              <Search size={18} strokeWidth={2.5} />
            </button>
          </div>
          
          <Link 
            href="/contact" 
            className="hidden lg:flex items-center gap-3 bg-white text-black border border-white/10 rounded-full px-8 py-3 text-[11px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-lg"
          >
            CONTACT US <ArrowUpRight size={14} strokeWidth={3} />
          </Link>

          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-ink border-b border-white/10 p-8 flex flex-col gap-8 z-50">
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
              className="text-xl font-bold text-white hover:text-accent transition-colors border-b border-white/5 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
