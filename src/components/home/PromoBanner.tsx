"use client";
import React, { useState } from "react";
import Reveal from "@/components/shared/Reveal";

export default function PromoBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-accent py-24 px-6 md:px-12 text-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <Reveal>
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 leading-none">20% off</h2>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Your First Order</h3>
            <p className="text-background/90 text-sm">
              I cannot say enough great things about our visual delivery. Claim your first discount now.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="Your Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-ink placeholder:text-ink/40 px-6 py-4 rounded-full w-full outline-none focus:ring-2 focus:ring-primary/50 text-xs uppercase tracking-widest font-bold"
            />
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-ink hover:bg-ink/80 text-background px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap transition-colors"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe Now! ↗"}
            </button>
          </form>
          {status === "success" && <p className="text-xs uppercase tracking-widest mt-2 font-bold text-background/80">Success! Check your inbox.</p>}
          {status === "error" && <p className="text-xs uppercase tracking-widest mt-2 font-bold text-red-100">Something went wrong. Try again.</p>}
        </Reveal>
      </div>
    </section>
  );
}
