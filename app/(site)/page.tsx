import { FleetSection } from "@/components/fleet-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { ChauffeurSection } from "@/components/chauffeur-section";
import { AboutSection } from "@/components/about-section";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { OurClientsSection } from "@/components/our-clients-section";
import { ContactSection } from "@/components/contact-section";
import { FLEET_DATA } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FleetSection vehicles={FLEET_DATA} />
      <HowItWorksSection />
      <ServicesSection />
      <ChauffeurSection />
      <AboutSection />
      <VisionMissionSection />
      <OurClientsSection />
      <ContactSection />
    </>
  );
}
