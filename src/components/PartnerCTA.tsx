import { content } from "@/lib/content";
import { Button } from "./ui/Button";

export function PartnerCTA() {
  return (
    <section id="partner-cta" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {content.partnerCTA.title}
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {content.partnerCTA.description}
        </p>
        <Button variant="secondary" className="text-lg px-8 py-4">
          {content.partnerCTA.buttonText}
        </Button>
      </div>
    </section>
  );
}
