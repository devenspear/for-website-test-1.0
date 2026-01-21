import { content } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const icons = {
  building: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  home: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  heart: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  users: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
};

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading centered>{content.partners.title}</SectionHeading>
        <p className="text-center text-text-secondary max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-2">
          {content.partners.intro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {content.partners.types.map((partner) => (
            <Card key={partner.title} className="text-center h-full flex flex-col">
              <div className="text-primary mx-auto mb-4">
                {icons[partner.icon as keyof typeof icons]}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {partner.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                {partner.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="#partner-cta" variant="primary">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
