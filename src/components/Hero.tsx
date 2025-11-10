import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ChevronDown, Sparkles} from "lucide-react";

interface HeroProps {
  jsEnabled?: boolean;
}

export const Hero = ({jsEnabled = true}: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !jsEnabled) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(codeRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)",
      });

      // Floating animation for particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        Array.from(particles).forEach((particle, i) => {
          gsap.to(particle, {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [jsEnabled]);

  const scrollToContent = () => {
    if (!jsEnabled) return;
    const firstSection = document.querySelector("section:nth-of-type(2)");
    firstSection?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      {/* Floating particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Interactive Learning Experience
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Web Development
            </span>
            <span className="block text-foreground mt-1 sm:mt-2">
              Fundamentals
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Master the essential building blocks of modern web development —
            from HTML structure to Node.js backend
          </p>

          {/* Interactive code block */}
          <div
            ref={codeRef}
            className="max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl bg-code-bg border border-border/50 backdrop-blur-sm shadow-glow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
              </div>
              <span className="text-xs text-muted-foreground ml-2 font-mono">
                index.html
              </span>
            </div>
            <code className="text-left block font-mono text-xs sm:text-sm md:text-base leading-relaxed">
              <span className="text-code-keyword">const</span>{" "}
              <span className="text-code-text">technologies</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-accent">[</span>
              <br />
              <span className="text-code-string ml-4"> 'HTML'</span>,{" "}
              <span className="text-code-string">'CSS'</span>,{" "}
              <span className="text-code-string">'JavaScript'</span>,
              <br />
              <span className="text-code-string ml-4"> 'React'</span>,{" "}
              <span className="text-code-string">'Node.js'</span>
              <br />
              <span className="text-accent">]</span>;
            </code>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToContent}
            className={`inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors mt-8 group ${
              !jsEnabled ? "cursor-default" : "cursor-pointer"
            }`}
            disabled={!jsEnabled}
          >
            <span className="text-sm font-medium">Explore Technologies</span>
            <ChevronDown
              className={`w-5 h-5 ${jsEnabled ? "animate-bounce" : ""}`}
            />
          </button>

          {!jsEnabled && (
            <div className="mt-8 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
              <p className="text-destructive font-medium">
                ⚠️ JavaScript is disabled - Animations and interactions are not
                available
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
