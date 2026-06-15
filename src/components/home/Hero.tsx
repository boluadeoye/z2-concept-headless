"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const slides = [
  {
    image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521102/blog_assets/skw6qc5r8hu7ajzgmuxh.png",
    heading: "Transform Your Brand with Creative Design & Print Solutions",
    subtext: "We bring your vision to life through exceptional branding, innovative design, and high-quality printing services."
  },
  {
    image: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png",
    heading: "Handcrafted Frames & High-End Gallery Printing",
    subtext: "Elevate your visual memories into physical works of art with our master-grade custom framing solutions."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Slides with Cross-Fade */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-70" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image}
            alt="Z2 Concept Hero Background"
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <Reveal>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight uppercase">
            {slides[current].heading}
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            {slides[current].subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-48 bg-black text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all border border-black text-center"
            >
              Contact Us
            </Link>
            <Link 
              href="/portfolio" 
              className="w-full sm:w-48 bg-transparent border border-white/60 text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              View Our Work
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Slider Navigation Arrows */}
      <div className="absolute inset-x-6 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination Bar/Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20 items-center">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? "w-8 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
