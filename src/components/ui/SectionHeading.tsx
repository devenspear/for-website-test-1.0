interface SectionHeadingProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ children, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
        {children}
      </h2>
      <div className={`h-1 w-16 bg-accent rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
