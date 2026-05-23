import CampaignHeader from "@/components/CampaignHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import VolunteerDonateSection from "@/components/VolunteerDonateSection";
import ShareSection from "@/components/ShareSection";
import ContactSection from "@/components/ContactSection";
import CampaignFooter from "@/components/CampaignFooter";

const Index = () => (
  <>
    <CampaignHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <PrioritiesSection />
      <VolunteerDonateSection />
      <ShareSection />
      <ContactSection />
    </main>
    <CampaignFooter />
  </>
);

export default Index;
