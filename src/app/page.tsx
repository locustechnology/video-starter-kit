import Header from "@/components/landing-header";
import Hero from "@/components/landing-hero";
import Features from "@/components/landing-features";
import Footer from "@/components/landing-footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <Header />
      <main className="lg:pt-0">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
