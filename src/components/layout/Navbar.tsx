"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setSetScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSetScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = variant === "transparent" && !scrolled;

  const navClasses = isTransparent
    ? "absolute top-0 left-0 right-0 z-50 bg-transparent text-white"
    : "fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md text-white border-b border-white/5";

  return (
    <nav className={`${navClasses} transition-all duration-500`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        
        {/* LEFT: Brand Identity */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="text-2xl md:text-3xl font-black text-primary tracking-tighter transition-transform group-hover:scale-105">Z2</span>
          <div className="flex flex-col leading-none">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white font-bold">
              Concept x Kefee HP
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation Links (Hidden on Mobile, Visible on MD+) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
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
              className="text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-accent transition-colors flex items-center gap-1"
            >
              {link.name}
              <ChevronDown size={10} className="opacity-40" />
            </Link>
          ))}
        </div>

        {/* RIGHT: Actions & Pill Button */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white/80 hover:text-accent transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
            <Link href="/store" className="text-white/80 hover:text-accent transition-colors relative">
              <ShoppingBag size={18} strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-accent text-white text-[8px] font-bold rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>

          {/* The "CONTACT US" Pill (Desktop Only) */}
          <Link
            href="/contact"
            className="hidden md:flex bg-white text-ink rounded-full px-7 py-3 text-[10px] font-black tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all duration-300 items-center gap-2 shadow-lg shadow-black/20"
          >
            Contact Us
            <ArrowUpRight size={14} strokeWidth={3} />
          </Link>

          {/* Mobile Toggle & Cart */}
          <div className="flex md:hidden items-center gap-4">
            <Link href="/store" className="text-white relative p-2">
              <ShoppingBag size={20} />
            </Link>
            <button className="text-white p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-ink z-50 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-5">
          {[
            "Home", "About", "Services", "Portfolio", "Store", "Blog", "Contact Us"
          ].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white border-b border-white/5 pb-4"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
