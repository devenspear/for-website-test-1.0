import Image from "next/image";
import { content } from "@/lib/content";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Community support and recovery"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          {content.hero.headline}
        </h1>
        <p
          className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
        >
          {content.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#our-story" variant="primary">
            Learn More
          </Button>
          <Button href="#get-involved" variant="secondary">
            Get Involved
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/80 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
