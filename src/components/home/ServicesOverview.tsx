import React from "react";
import Image from "next/image";
import { Camera, Video, Monitor, PenTool, Cpu, Layers, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const categories = [
  { icon: <Camera size={20} />, title: "Photography", list: ["Studio Portraiture", "Editorial Captures"] },
  { icon: <Video size={20} />, title: "Video Production", list: ["Event Coverage", "Commercial Direction"] },
  { icon: <Monitor size={20} />, title: "Website Development", list: ["Headless Commerce", "Portfolio Hubs"] },
  { icon: <PenTool size={20} />, title: "Graphic Design", list: ["Identity Guidelines", "Brand Packages"] }
];

export default function ServicesOverview() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <Reveal>
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-4 inline-block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink uppercase mb-4">Our Services</h2>
          </div>
        </Reveal>

        {/* Feature Split (High-End Photography & Video Hooks) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          
          {/* Card 1: Creative Photography */}
          <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-xl border border-ink/5">
            <Image 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521115/blog_assets/ytxsfz4o5w7brat1zx4q.png"
              alt="Photography Lens & Gear"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white flex justify-between items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent mb-2 block">Phase One</span>
                <h3 className="text-2xl font-bold uppercase">Wedding Photography</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Web Layout */}
          <div className="relative aspect-video rounded-3xl overflow-hidden group shadow-xl border border-ink/5">
            <Image 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521121/blog_assets/hbgy9tg3xwufbzemj3v0.png"
              alt="Web Design Workspace"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white flex justify-between items-end">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent mb-2 block">Phase Two</span>
                <h3 className="text-2xl font-bold uppercase">e-Commerce Website</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((service, index) => (
            <Reveal key={index}>
              <div className="bg-background/30 border border-ink/5 p-8 rounded-2xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h3 className="text-md font-bold text-ink uppercase mb-4">{service.title}</h3>
                </div>
                <ul className="space-y-2 border-t border-ink/5 pt-4">
                  {service.list.map((item) => (
                    <li key={item} className="text-ink/60 text-xs flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
