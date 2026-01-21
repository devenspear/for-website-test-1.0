interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-surface rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  );
}
