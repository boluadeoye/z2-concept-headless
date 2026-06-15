import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProductCollection from "@/components/home/ProductCollection";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar variant="transparent" />
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <ProductCollection />
      <PromoBanner />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
