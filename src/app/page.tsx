import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Services } from "@/components/Services";
import { Partners } from "@/components/Partners";
import { GetInvolved } from "@/components/GetInvolved";
import { PartnerCTA } from "@/components/PartnerCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Services />
        <Partners />
        <GetInvolved />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
