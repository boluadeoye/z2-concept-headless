import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      {/* Environmental Layer: Background Image & Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 pt-24 pb-12">
        
        {/* DESKTOP BLOCK: Sleigh Methodology (Spread & Anchor) */}
        <div className="hidden md:flex justify-between items-start mb-24">
          
          {/* Left Anchor: Brand (30%) */}
          <div className="w-[30%] flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <span className="text-3xl font-black text-primary tracking-tighter">Z2</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold pt-1">
                Concept x Kefee HP
              </span>
            </Link>
            <p className="text-white/60 text-[13px] leading-[1.8] max-w-[30ch]">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* Right Anchor: Links & Contact (65%) */}
          <div className="w-[65%] flex justify-between items-start">
            {/* Quick Links */}
            <div className="flex flex-col">
              <h4 className="text-accent font-bold text-[12px] uppercase tracking-[0.25em] mb-10">
                Quick Links
              </h4>
              <ul className="space-y-5 text-[13px] text-white/50 font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Works</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            {/* More Links */}
            <div className="flex flex-col">
              <h4 className="text-accent font-bold text-[12px] uppercase tracking-[0.25em] mb-10">
                More Links
              </h4>
              <ul className="space-y-5 text-[13px] text-white/50 font-medium">
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col min-w-[240px]">
              <h4 className="text-accent font-bold text-[12px] uppercase tracking-[0.25em] mb-10">
                Contact Us
              </h4>
              <ul className="space-y-6 text-[13px] text-white/70 font-medium">
                <li className="flex items-center gap-4 group">
                  <Mail size={16} className="text-primary shrink-0" />
                  <span className="hover:text-white transition-colors cursor-pointer">Phelzink@gmail.com</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>+234 812 582 1771</span>
                </li>
                <li className="flex items-start gap-4 group">
                  <MapPin size={16} className="text-primary shrink-0 mt-1" />
                  <span className="leading-relaxed">24, Oguntolu street,<br />Shomolu, Lagos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* MOBILE BLOCK: Sleigh Methodology (Stacked Grid) */}
        <div className="md:hidden flex flex-col gap-16 mb-20">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-black text-primary tracking-tighter">Z2</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white font-bold pt-1">
                Concept x Kefee HP
              </span>
            </Link>
            <p className="text-white/60 text-[13px] leading-relaxed">
              Your trusted partner for designing, branding, and printing solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-accent font-bold text-[11px] uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-4 text-[12px] text-white/50">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Our Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent font-bold text-[11px] uppercase tracking-widest mb-6">More Links</h4>
              <ul className="space-y-4 text-[12px] text-white/50">
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-accent font-bold text-[11px] uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-5 text-[13px] text-white/70">
              <li className="flex items-center gap-4"><Mail size={16} className="text-primary" /> Phelzink@gmail.com</li>
              <li className="flex items-center gap-4"><Phone size={16} className="text-primary" /> +234 812 582 1771</li>
              <li className="flex items-start gap-4"><MapPin size={16} className="text-primary mt-1" /> 24, Oguntolu street, Shomolu, Lagos</li>
            </ul>
          </div>
        </div>

        {/* Skyline Divider & Copyright */}
        <div className="pt-10 border-t border-white/10">
          <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.35em] font-bold text-center">
            © 2026 Z2Concepts x Kefee Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
