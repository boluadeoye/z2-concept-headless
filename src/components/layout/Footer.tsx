import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-24 pb-12 overflow-hidden">
      {/* Environmental Layer: Background Image & Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Spread Container */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-16 lg:gap-4 mb-24">
          
          {/* Column 1: Brand Anchor (Far Left) */}
          <div className="flex flex-col items-start max-w-[320px]">
            <Link href="/" className="flex items-baseline gap-2 mb-8 group">
              <span className="text-4xl font-black text-primary tracking-tighter transition-transform group-hover:scale-105">Z2</span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-white font-bold">
                Concept x Kefee HP
              </span>
            </Link>
            <p className="text-white/70 text-[13px] leading-[1.8] font-medium">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* Column 2: Quick Links (Floating Left-Center) */}
          <div className="w-fit">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.2em] mb-10">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[13px] text-white/60 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 3: More Links (Floating Right-Center) */}
          <div className="w-fit">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.2em] mb-10">
              More Links
            </h4>
            <ul className="space-y-4 text-[13px] text-white/60 font-medium">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Anchor (Far Right) */}
          <div className="w-fit lg:min-w-[280px]">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.2em] mb-10">
              Contact Us
            </h4>
            <ul className="space-y-6 text-[13px] text-white/70 font-medium">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                  <Mail size={16} className="text-primary" />
                </div>
                <span className="pt-1.5">Phelzink@gmail.com</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                  <Phone size={16} className="text-primary" />
                </div>
                <span className="pt-1.5">+234 812 582 1771</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                  <MapPin size={16} className="text-primary" />
                </div>
                <span className="pt-1.5 leading-relaxed">24, Oguntolu street,<br />Shomolu, Lagos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Skyline Divider & Copyright */}
        <div className="pt-10 border-t border-white/10">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold text-center">
            © 2026 Z2Concepts x Kefee Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
