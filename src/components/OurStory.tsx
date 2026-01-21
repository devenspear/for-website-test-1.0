import Image from "next/image";
import { content } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";

export function OurStory() {
  return (
    <section id="our-story" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Transparency App Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/transparency-app.jpg"
                alt="Transparency App - Daily Goal Complete"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <SectionHeading>{content.ourStory.title}</SectionHeading>
            <div className="space-y-4">
              {content.ourStory.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
