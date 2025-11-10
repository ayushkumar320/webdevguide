import { useState } from "react";
import { Hero } from "@/components/Hero";
import { ToggleControls } from "@/components/ToggleControls";
import { TechCard } from "@/components/TechCard";
import { Code2, Palette, Zap, Component, Server } from "lucide-react";

const Index = () => {
  const [jsEnabled, setJsEnabled] = useState(true);

  const technologies = [
    {
      title: "HTML",
      icon: <Code2 className="w-8 h-8 text-primary" />,
      description: "HTML is the skeleton of every website. It provides structure and semantic meaning to web content, creating the foundation upon which all web experiences are built.",
      features: [
        "Semantic markup improves accessibility and SEO",
        "Forms and input validation for user interaction",
        "Multimedia support for rich content experiences",
        "Document structure that search engines understand"
      ],
      codeExample: {
        language: "html",
        code: `<span class="text-code-keyword">&lt;article</span> <span class="text-accent">class</span>=<span class="text-code-string">"blog-post"</span><span class="text-code-keyword">&gt;</span>
  <span class="text-code-keyword">&lt;header&gt;</span>
    <span class="text-code-keyword">&lt;h1&gt;</span><span class="text-foreground">Getting Started with HTML</span><span class="text-code-keyword">&lt;/h1&gt;</span>
    <span class="text-code-keyword">&lt;time</span> <span class="text-accent">datetime</span>=<span class="text-code-string">"2024-01-15"</span><span class="text-code-keyword">&gt;</span><span class="text-foreground">January 15, 2024</span><span class="text-code-keyword">&lt;/time&gt;</span>
  <span class="text-code-keyword">&lt;/header&gt;</span>
  <span class="text-code-keyword">&lt;p&gt;</span><span class="text-foreground">HTML forms the foundation...</span><span class="text-code-keyword">&lt;/p&gt;</span>
<span class="text-code-keyword">&lt;/article&gt;</span>`
      },
      gradient: "bg-gradient-to-br from-primary/20 to-transparent"
    },
    {
      title: "CSS",
      icon: <Palette className="w-8 h-8 text-accent" />,
      description: "CSS transforms plain HTML into beautiful, responsive designs. It controls every visual aspect of your website, from colors and typography to complex animations and layouts.",
      features: [
        "Flexbox and Grid for sophisticated layouts",
        "Animations and transitions for engaging UX",
        "Responsive design with media queries",
        "Modern features like variables and nesting"
      ],
      codeExample: {
        language: "css",
        code: `<span class="text-accent">.hero-section</span> {
  <span class="text-code-keyword">display</span>: <span class="text-code-text">grid</span>;
  <span class="text-code-keyword">place-items</span>: <span class="text-code-text">center</span>;
  <span class="text-code-keyword">min-height</span>: <span class="text-code-string">100vh</span>;
  <span class="text-code-keyword">background</span>: <span class="text-code-string">linear-gradient(135deg, #667eea, #764ba2)</span>;
  <span class="text-code-keyword">animation</span>: <span class="text-code-text">fadeIn 1s ease-out</span>;
}

<span class="text-code-keyword">@keyframes</span> <span class="text-code-text">fadeIn</span> {
  <span class="text-accent">from</span> { <span class="text-code-keyword">opacity</span>: <span class="text-code-string">0</span>; }
  <span class="text-accent">to</span> { <span class="text-code-keyword">opacity</span>: <span class="text-code-string">1</span>; }
}`
      },
      gradient: "bg-gradient-to-br from-accent/20 to-transparent"
    },
    {
      title: "JavaScript",
      icon: <Zap className="w-8 h-8 text-primary" />,
      description: "JavaScript is the programming language that powers the modern web. It adds interactivity, handles user events, fetches data, and creates dynamic user experiences.",
      features: [
        "Event-driven programming for user interactions",
        "Async/await for handling API calls elegantly",
        "DOM manipulation to update content dynamically",
        "Modern ES6+ features for cleaner code"
      ],
      codeExample: {
        language: "js",
        code: `<span class="text-code-keyword">async function</span> <span class="text-code-text">fetchUserData</span>(<span class="text-accent">userId</span>) {
  <span class="text-code-keyword">try</span> {
    <span class="text-code-keyword">const</span> <span class="text-code-text">response</span> = <span class="text-code-keyword">await</span> <span class="text-code-text">fetch</span>(<span class="text-code-string">\`/api/users/\${userId}\`</span>);
    <span class="text-code-keyword">const</span> <span class="text-code-text">data</span> = <span class="text-code-keyword">await</span> <span class="text-code-text">response</span>.<span class="text-code-text">json</span>();
    <span class="text-code-text">updateUI</span>(<span class="text-code-text">data</span>);
  } <span class="text-code-keyword">catch</span> (<span class="text-accent">error</span>) {
    <span class="text-code-text">console</span>.<span class="text-code-text">error</span>(<span class="text-code-string">'Failed to fetch:'</span>, <span class="text-accent">error</span>);
  }
}`
      },
      gradient: "bg-gradient-to-br from-primary/20 to-transparent"
    },
    {
      title: "React",
      icon: <Component className="w-8 h-8 text-accent" />,
      description: "React is a powerful library for building modern user interfaces with reusable components. It makes complex UIs manageable and performant through its virtual DOM and component architecture.",
      features: [
        "Component-based architecture for scalability",
        "Virtual DOM for blazing-fast updates",
        "Hooks API for elegant state management",
        "Massive ecosystem with tools and libraries"
      ],
      codeExample: {
        language: "jsx",
        code: `<span class="text-code-keyword">import</span> { <span class="text-code-text">useState</span>, <span class="text-code-text">useEffect</span> } <span class="text-code-keyword">from</span> <span class="text-code-string">'react'</span>;

<span class="text-code-keyword">function</span> <span class="text-accent">UserProfile</span>({ <span class="text-code-text">userId</span> }) {
  <span class="text-code-keyword">const</span> [<span class="text-code-text">user</span>, <span class="text-code-text">setUser</span>] = <span class="text-code-text">useState</span>(<span class="text-code-keyword">null</span>);

  <span class="text-code-text">useEffect</span>(() => {
    <span class="text-code-text">fetchUser</span>(<span class="text-code-text">userId</span>).<span class="text-code-text">then</span>(<span class="text-code-text">setUser</span>);
  }, [<span class="text-code-text">userId</span>]);

  <span class="text-code-keyword">return</span> <span class="text-code-keyword">&lt;div&gt;</span>{<span class="text-code-text">user</span>?.<span class="text-code-text">name</span>}<span class="text-code-keyword">&lt;/div&gt;</span>;
}`
      },
      gradient: "bg-gradient-to-br from-accent/20 to-transparent"
    },
    {
      title: "Node.js",
      icon: <Server className="w-8 h-8 text-primary" />,
      description: "Node.js brings JavaScript to the server, enabling full-stack development with a single language. Build scalable APIs, real-time applications, and microservices with ease.",
      features: [
        "Event-driven architecture for high concurrency",
        "NPM ecosystem with 2M+ packages",
        "Build REST APIs and GraphQL servers",
        "Real-time capabilities with WebSockets"
      ],
      codeExample: {
        language: "js",
        code: `<span class="text-code-keyword">const</span> <span class="text-code-text">express</span> = <span class="text-code-text">require</span>(<span class="text-code-string">'express'</span>);
<span class="text-code-keyword">const</span> <span class="text-code-text">app</span> = <span class="text-code-text">express</span>();

<span class="text-code-text">app</span>.<span class="text-code-text">get</span>(<span class="text-code-string">'/api/users'</span>, <span class="text-code-keyword">async</span> (<span class="text-accent">req</span>, <span class="text-accent">res</span>) => {
  <span class="text-code-keyword">const</span> <span class="text-code-text">users</span> = <span class="text-code-keyword">await</span> <span class="text-code-text">database</span>.<span class="text-code-text">getUsers</span>();
  <span class="text-code-text">res</span>.<span class="text-code-text">json</span>({ <span class="text-code-text">users</span> });
});

<span class="text-code-text">app</span>.<span class="text-code-text">listen</span>(<span class="text-code-string">3000</span>, () => <span class="text-code-text">console</span>.<span class="text-code-text">log</span>(<span class="text-code-string">'Server running!'</span>));`
      },
      gradient: "bg-gradient-to-br from-primary/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ToggleControls onJSToggle={setJsEnabled} />
      <Hero jsEnabled={jsEnabled} />
      
      <div className="space-y-8">
        {technologies.map((tech, index) => (
          <TechCard key={index} {...tech} index={index} jsEnabled={jsEnabled} />
        ))}
      </div>
      
      <footer className="relative py-20 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Build the Future?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These five technologies are your toolkit for creating amazing web experiences. Start with HTML, style with CSS, add logic with JavaScript, build interfaces with React, and power it all with Node.js.
          </p>
          <div className="inline-block p-6 rounded-2xl bg-code-bg border border-border/50 shadow-glow-lg">
            <code className="text-code-text font-mono text-base">
              <span className="text-code-keyword">while</span> (<span className="text-code-text">learning</span>) {"{"}
              <br />
              <span className="ml-4 text-code-text">keep</span>.<span className="text-code-text">building</span>();
              <br />
              {"}"}
            </code>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
