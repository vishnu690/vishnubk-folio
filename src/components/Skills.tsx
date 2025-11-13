import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Wrench, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      icon: Code,
      title: "Backend",
      skills: ["NestJS", "TypeORM", "PHP", "Python", "TypeScript", "JavaScript"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "MSSQL", "PostgreSQL", "Supabase"],
    },
    {
      icon: Smartphone,
      title: "Frontend",
      skills: ["Flutter", "React", "Vue.js", "Nuxt.js"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "Docker", "Postman", "Azure"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Skills & Tech Stack
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to build robust, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="skill-tag px-3 py-1 text-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
