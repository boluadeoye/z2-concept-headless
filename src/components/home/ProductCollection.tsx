import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { getWooProducts } from "@/lib/woocommerce";
import Reveal from "@/components/shared/Reveal";

const fallbackProducts = [
  { id: "1", name: "Classic Walnut Frame", price: "25,000", permalink: "/store", images: [{ src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png" }] },
  { id: "2", name: "Premium Matte Black Frame", price: "18,500", permalink: "/store", images: [{ src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png" }] },
  { id: "3", name: "Luxury Gilded Gold Frame", price: "32,000", permalink: "/store", images: [{ src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png" }] },
  { id: "4", name: "Minimalist Birch Frame", price: "15,000", permalink: "/store", images: [{ src: "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png" }] }
];

export default async function ProductCollection() {
  const products = await getWooProducts("frame-products");
  const displayProducts = products.length > 0 ? products.slice(0, 4) : fallbackProducts;

  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <Reveal>
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase mb-4 inline-block">Our Store</span>
            <h2 className="text-3xl md:text-5xl font-bold text-ink uppercase mb-4">Explore Our Frame Products</h2>
            <p className="text-ink/60 text-xs md:text-sm max-w-xl mx-auto">
              Exquisite, hand-crafted borders designed to elevate your visual memories into physical works of art.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts.map((product: any) => (
            <Reveal key={product.id}>
              <div className="bg-white rounded-[32px] overflow-hidden border border-ink/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full justify-between">
                <div className="relative aspect-square w-full">
                  <Image 
                    src={product.images?.[0]?.src || "https://res.cloudinary.com/dwbjb3svx/image/upload/v1781521130/blog_assets/dsitt1fhtiod9dkndedz.png"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-black text-ink uppercase tracking-wide">{product.name}</h3>
                    <p className="text-primary font-bold text-xs mt-1">₦{product.price}</p>
                  </div>
                  <Link 
                    href={product.permalink || `/product/${product.id}`}
                    className="w-10 h-10 bg-accent hover:bg-accent-dark text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ShoppingBag size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-16">
            <Link href="/store" className="btn-pill border border-ink/20 text-ink hover:bg-ink hover:text-white inline-flex">
              View All Products
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
