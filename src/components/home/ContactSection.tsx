"use client";
import React from "react";
import Reveal from "@/components/shared/Reveal";

export default function ContactSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Left */}
          <div className="space-y-12">
            <Reveal>
              <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-4 inline-block">Get In Touch</span>
              <h2 className="text-3xl md:text-5xl font-bold text-ink uppercase mb-8">Contact Information</h2>
              <div className="space-y-6 text-sm text-ink/80">
                <div className="border-b border-ink/10 pb-4">
                  <strong className="block text-[10px] uppercase tracking-widest text-primary mb-1">Phone</strong>
                  <p>+234 707 288 9459</p>
                  <p>+234 812 582 1771</p>
                </div>
                <div className="border-b border-ink/10 pb-4">
                  <strong className="block text-[10px] uppercase tracking-widest text-primary mb-1">Email</strong>
                  <p>phelzink@gmail.com</p>
                </div>
                <div className="border-b border-ink/10 pb-4">
                  <strong className="block text-[10px] uppercase tracking-widest text-primary mb-1">Location</strong>
                  <p>24, Oguntolu street, Shomolu, Lagos</p>
                </div>
              </div>
            </Reveal>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[250px] rounded-3xl overflow-hidden border border-ink/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123!2d3.376!3d6.524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf2a!2s24%20Oguntolu%20St%2C%20Somolu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716180000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form Right */}
          <Reveal>
            <div className="bg-white p-10 rounded-3xl border border-ink/5 shadow-xl">
              <h3 className="text-xl font-bold text-ink uppercase mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name" className="w-full px-6 py-4 rounded-xl bg-background border border-ink/10 text-xs uppercase tracking-widest font-bold outline-none" />
                  <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl bg-background border border-ink/10 text-xs uppercase tracking-widest font-bold outline-none" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl bg-background border border-ink/10 text-xs uppercase tracking-widest font-bold outline-none" />
                <textarea rows={4} placeholder="Message" className="w-full px-6 py-4 rounded-xl bg-background border border-ink/10 text-xs uppercase tracking-widest font-bold outline-none resize-none" />
                <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-colors">
                  Send Message ↗
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
