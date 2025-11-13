import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profileOne.png";
import { useParallax } from "@/hooks/useParallax";

export const Hero = () => {
  const offsetY = useParallax(0.3);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ transform: `translateY(${offsetY}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Vishnu B Kumar - Software Engineer"
              className="w-50 h-60 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60 blur-2xl opacity-20 -z-10"></div>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm Vishnu — Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              I build secure, scalable, and high-performance web applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-accent"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
