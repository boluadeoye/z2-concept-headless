import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-black text-accent tracking-tighter">Z2</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/90 font-light">Concept x Kefee HP</span>
            </Link>
            <p className="text-white/60 text-xs leading-relaxed max-w-[25ch]">
              Your trusted partner for designing, branding, and printing solutions that bring your vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Works</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">More Links</h4>
            <ul className="space-y-3 text-xs text-white/60">
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-3 text-xs text-white/60">
              <li>Email: phelzink@gmail.com</li>
              <li>Phone: +234 812 582 1771</li>
              <li>24, Oguntolu street, Shomolu, Lagos</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 text-center text-white/40 text-[10px] uppercase tracking-widest">
          © 2026 Z2Concepts x Kefee Productions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
