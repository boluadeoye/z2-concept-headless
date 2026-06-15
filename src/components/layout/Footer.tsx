import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-24 pb-12 overflow-hidden">
      {/* Environmental Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* THE SPREAD & ANCHOR LAYOUT */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-y-16 lg:gap-x-4">
          
          {/* COLUMN 1: BRAND (ANCHORED LEFT - 35%) */}
          <div className="w-full lg:w-[35%] flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <span className="text-4xl font-black text-primary tracking-tighter">Z2</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white font-bold pt-1">
                Concept x Kefee HP
              </span>
            </Link>
            <p className="text-white/70 text-[14px] leading-[1.8] max-w-[32ch]">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS (CENTER-LEFT - 15%) */}
          <div className="w-full sm:w-1/2 lg:w-[15%]">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.25em] mb-10">
              Quick Links
            </h4>
            <ul className="space-y-5 text-[14px] text-white/60 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: MORE LINKS (CENTER-RIGHT - 15%) */}
          <div className="w-full sm:w-1/2 lg:w-[15%]">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.25em] mb-10">
              More Links
            </h4>
            <ul className="space-y-5 text-[14px] text-white/60 font-medium">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT (ANCHORED RIGHT - 25%) */}
          <div className="w-full lg:w-[25%]">
            <h4 className="text-accent font-bold text-[13px] uppercase tracking-[0.25em] mb-10">
              Contact Us
            </h4>
            <ul className="space-y-6 text-[14px] text-white/70 font-medium">
              <li className="flex items-center gap-4 group">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="hover:text-white transition-colors cursor-pointer">Phelzink@gmail.com</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+234 812 582 1771</span>
              </li>
              <li className="flex items-start gap-4 group">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span className="leading-relaxed">24, Oguntolu street,<br />Shomolu, Lagos</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SKYLINE DIVIDER */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.35em] font-bold text-center">
            © 2026 Z2Concepts x Kefee Productions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
