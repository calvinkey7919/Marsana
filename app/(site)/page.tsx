import { FleetSection } from "@/components/fleet-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ServicesSection } from "@/components/services-section";
import { ChauffeurSection } from "@/components/chauffeur-section";
import { AboutSection } from "@/components/about-section";
import { VisionMissionSection } from "@/components/vision-mission-section";
import { OurClientsSection } from "@/components/our-clients-section";
import { ContactSection } from "@/components/contact-section";
import { xanoService } from "@/services/xano";
import { FLEET_DATA } from "@/lib/data";

export default async function Home() {
  // Fetch real data from Xano
  const xanoFleet = await xanoService.getFleet();

  // Map to UI format if data exists, otherwise fallback to mock data (or empty array if preferred)
  // Using Mock Data as fallback only if Xano is empty/fails to ensure site doesn't look broken on fresh deploy
  const vehicles = xanoFleet.length > 0
    ? xanoFleet.map(v => xanoService.mapToAppVehicle(v))
    : FLEET_DATA;

  return (
    <>
      <HeroSection />
      <FleetSection vehicles={vehicles} />
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
