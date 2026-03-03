import LandingFeatures from "@/components/landing-features";
import LandingFooter from "@/components/landing-footer";
import LandingHeader from "@/components/landing-header";
import LandingHero from "@/components/landing-hero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingFeatures />
      </main>
      <LandingFooter />
    </div>
  );
}
