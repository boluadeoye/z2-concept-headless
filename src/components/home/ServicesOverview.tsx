import React from "react";
import { Camera, Video, Monitor, PenTool, Cpu, Layers } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const services = [
  { icon: <Camera size={24} />, title: "Photography", desc: "Studio portraiture, product captures, and high-fashion editorial events.", list: ["Photo Studio", "Photo Editing"] },
  { icon: <Video size={24} />, title: "Video Production", desc: "Cinematic wedding documentaries, brand advertisements, and event coverage.", list: ["Event Coverage", "Video Editing"] },
  { icon: <Monitor size={24} />, title: "Website Development", desc: "Exquisite headless storefronts and portfolio architectures built to scale.", list: ["e-Commerce", "Real Estate"] },
  { icon: <PenTool size={24} />, title: "Graphic Design", desc: "Identity orchestration, editorial book structures, and premium typography.", list: ["Logo Design", "Social Media Design"] },
  { icon: <Cpu size={24} />, title: "AI Content Creation", desc: "High-end generative visual architectures and synthetic model generation.", list: ["Synthetic Visuals", "Prompt Engineering"] },
  { icon: <Layers size={24} />, title: "Brand Identity", desc: "Complete visual guideline definition and packaging design overrides.", list: ["Packaging Layout", "Identity Books"] }
];

export default function ServicesOverview() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <Reveal>
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-4 inline-block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink uppercase">Our Services</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index}>
              <div className="bg-background/40 border border-ink/5 p-10 rounded-2xl hover:border-primary transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="text-primary mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                  <p className="text-ink/75 text-xs md:text-sm leading-relaxed mb-6">{service.desc}</p>
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
