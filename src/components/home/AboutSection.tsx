"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"company" | "founder">("company");

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Left */}
          <div>
            <Reveal>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("company")}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === "company" ? "bg-accent text-white" : "border border-ink/10 text-ink/60"
                  }`}
                >
                  About Company
                </button>
                <button
                  onClick={() => setActiveTab("founder")}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === "founder" ? "bg-accent text-white" : "border border-ink/10 text-ink/60"
                  }`}
                >
                  About Founder
                </button>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8 leading-tight">
                {activeTab === "company" 
                  ? "Kefee Home Productions and its creative division, Z2 Concepts"
                  : "Visionary leadership crafting digital experiences & elite prints"
                }
              </h2>

              <div className="text-ink/80 text-sm md:text-base leading-relaxed space-y-6 mb-12">
                {activeTab === "company" ? (
                  <>
                    <p>We specialize in professional photography and video production, delivering high-quality visuals across a wide range of projects. From weddings and events to fashion, corporate content, and branded media.</p>
                    <p>Our collaborative approach ensures your unique vision is realized with absolute technical execution. We combine cinematic storytelling with premium print finishes.</p>
                  </>
                ) : (
                  <>
                    <p>Our founder built Z2 Concepts on the absolute belief that print and digital media are not separate entities, but elements of a single cohesive brand narrative.</p>
                    <p>With over a decade of experience directing both visual productions and complex engineering builds, we provide the ultimate creative oversight for your next campaign.</p>
                  </>
                )}
              </div>

              <button className="btn-pill border border-ink/20 text-ink hover:bg-ink hover:text-white">
                Download Profile <ArrowUpRight size={12} />
              </button>
            </Reveal>
          </div>

          {/* Image Right */}
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
              alt="Editorial Profile"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
