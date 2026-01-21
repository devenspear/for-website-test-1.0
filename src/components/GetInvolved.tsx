import { content } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading centered>{content.getInvolved.title}</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {/* Donate Card */}
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {content.getInvolved.donate.title}
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              {content.getInvolved.donate.description}
            </p>
            <Button variant="primary">
              Make a Donation
            </Button>
          </div>

          {/* Sponsorship Card */}
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {content.getInvolved.sponsorship.title}
              </h3>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              {content.getInvolved.sponsorship.description}
            </p>
            <Button variant="secondary">
              Explore Sponsorship
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
