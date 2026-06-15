"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between bg-black overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_25%] opacity-60 pointer-events-none"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-center text-center mt-24">
        <Reveal>
          <h1 className="text-4xl md:text-7xl font-bold text-white max-w-5xl leading-[1.1] mb-8 uppercase">
            Transform Your Brand with <br />
            <span className="font-serif-italic text-accent normal-case">Creative</span> Design & Print Solutions
          </h1>
          <p className="text-white/80 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-medium">
            We are your creative partner, delivering exquisite photography, video production, digital systems, and elite packaging elements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-pill bg-accent text-white hover:bg-accent-dark w-full sm:w-auto justify-center">
              Contact Us <ArrowUpRight size={12} />
            </Link>
            <Link href="/services" className="btn-pill border border-white/20 text-white hover:bg-white/5 w-full sm:w-auto justify-center">
              Our Services
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Infinite Services Ticker */}
      <div className="relative z-10 bg-primary/90 backdrop-blur-sm border-t border-white/10 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((cycle) => (
            <div key={cycle} className="flex gap-12 items-center text-white font-bold text-xs uppercase tracking-[0.3em] pr-12">
              <span>Video Production</span> <span className="text-accent">•</span>
              <span>Website Development</span> <span className="text-accent">•</span>
              <span>Graphic Design</span> <span className="text-accent">•</span>
              <span>AI Content Creation</span> <span className="text-accent">•</span>
              <span>Photography</span> <span className="text-accent">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
