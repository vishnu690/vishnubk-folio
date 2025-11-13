import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const interests = [
    { icon: Code2, text: "Clean, maintainable code" },
    { icon: Lightbulb, text: "Continuous learning" },
    { icon: MapPin, text: "Exploring new places" },
  ];

  return (
    <section id="about" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-5xl">
        <div ref={ref} className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a software professional with over <span className="text-primary font-semibold">4 years of experience</span> specializing in backend development and API design. I enjoy building efficient systems, exploring new technologies, and solving real-world problems through clean, maintainable code.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise lies in creating scalable backend architectures, optimizing database performance, and implementing secure, enterprise-grade solutions. I'm passionate about writing code that not only works but is also elegant and easy to maintain.
                </p>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">What Drives Me</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        style={{ animationDelay: `${index * 150}ms` }}
                        className={`flex items-center space-x-3 p-4 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                      >
                        <interest.icon className="h-6 w-6 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{interest.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
