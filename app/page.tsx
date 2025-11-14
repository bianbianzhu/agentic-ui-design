import Header from "@/components/Header";
import FloatingContact from "@/components/FloatingContact";
import Hero from "@/components/sections/Hero";
import FeaturedVideo from "@/components/sections/FeaturedVideo";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import PlatformDemo from "@/components/sections/PlatformDemo";
import SuccessStories from "@/components/sections/SuccessStories";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <FloatingContact />

      <Hero />
      <FeaturedVideo />
      <About />
      <Features />
      <Solutions />
      <PlatformDemo />
      <SuccessStories />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
