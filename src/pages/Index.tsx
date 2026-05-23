import CampaignHeader from "@/components/CampaignHeader";
import HeroSection from "@/components/HeroSection";
import ShareBar from "@/components/ShareBar";
import AboutSection from "@/components/AboutSection";
import PrioritiesSection from "@/components/PrioritiesSection";
import VolunteerDonateSection from "@/components/VolunteerDonateSection";
import ContactSection from "@/components/ContactSection";
import CampaignFooter from "@/components/CampaignFooter";

const Index = () => (
  <>
    <CampaignHeader />
    <main>
      <HeroSection />
      <ShareBar />
      <AboutSection />
      <PrioritiesSection />
      <VolunteerDonateSection />
      <ContactSection />
    </main>
    <CampaignFooter />
  </>
);

export default Index;
