import React from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Left */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
              alt="Client Review Asset"
              fill
              className="object-cover"
            />
          </div>

          {/* Testimonial Right */}
          <div>
            <Reveal>
              <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-4 inline-block">Beyond Expectations</span>
              <h2 className="text-3xl md:text-5xl font-bold text-ink uppercase mb-8">See what our clients are saying!</h2>
              
              <div className="bg-background p-10 rounded-2xl border border-ink/5">
                <p className="text-ink/80 text-sm md:text-base italic leading-relaxed mb-8">
                  &ldquo;Beyond expectations with their innovative marketing strategies. They took the time to understand our brand, delivering targeted campaigns that significantly boosted our engagement.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src="https://res.cloudinary.com/dwbjb3svx/image/upload/v1776180088/blog_assets/xqie8to9cmdxjiaom0tm.png"
                      alt="Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink uppercase">Usman Nkechi</h4>
                    <p className="text-[10px] text-primary uppercase tracking-widest mt-1">CEO, UB Group</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
