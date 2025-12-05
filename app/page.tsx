import BoostSection from "@/components/Boot";
import Brands from "@/components/Brands";
import DashboardPreview from "@/components/Dashboard";
import FAQ from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StatementSection from "@/components/Statement";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Brands /> */}
      <Features />
      <DashboardPreview />
      <StatementSection />
      <BoostSection />
      <FAQ />
      <Footer />
    </div>
  );
}
