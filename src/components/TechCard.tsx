import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

gsap.registerPlugin(ScrollTrigger);

interface TechCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  features: string[];
  codeExample: {
    language: string;
    code: string;
  };
  gradient: string;
  index: number;
  jsEnabled?: boolean;
}

export const TechCard = ({
  title,
  icon,
  description,
  features,
  codeExample,
  gradient,
  index,
  jsEnabled = true,
}: TechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !jsEnabled) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(codeRef.current, {
        scrollTrigger: {
          trigger: codeRef.current,
          start: "top 90%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "back.out(1.7)",
      });
    }, cardRef);

    return () => ctx.revert();
  }, [jsEnabled]);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <Card
          ref={cardRef}
          className={`relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 group ${
            index % 2 === 0 ? "md:mr-12" : "md:ml-12"
          } ${!jsEnabled ? 'opacity-100' : ''}`}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity ${gradient}`} />

          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 shadow-glow">
                  {icon}
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {title}
                  </h2>
                  <Badge variant="secondary" className="text-xs font-mono">
                    {codeExample.language}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl">
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 transition-all duration-300 ${
                    jsEnabled ? 'hover:bg-secondary/50 hover:translate-x-1' : ''
                  }`}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-primary text-sm font-bold">✓</span>
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            {/* Code Example */}
            <div
              ref={codeRef}
              className="rounded-xl overflow-hidden border border-border/50 bg-code-bg shadow-glow"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  example.{codeExample.language}
                </span>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code
                  className="font-mono text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: codeExample.code }}
                />
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
