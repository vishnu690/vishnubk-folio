import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, Users, Database } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Layers,
      title: "Logezy",
      type: "Full-Stack Development",
      description: "Workforce management platform with comprehensive features for team coordination and task management.",
      achievements: [
        "Developed and maintained frontend and backend systems",
        "Implemented multi-tenant database architecture for scalability",
        "Optimized data separation across multiple client organizations",
        "Collaborated on end-to-end feature development from APIs to UI",
      ],
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "React"],
    },
    {
      icon: Users,
      title: "Careezy",
      type: "Backend Development",
      description: "Home care delivery software designed to streamline healthcare services and patient management.",
      achievements: [
        "Built scalable backend architecture for healthcare operations",
        "Implemented multi-tenant database for secure data isolation",
        "Ensured high performance and reliability in critical systems",
        "Integrated with frontend for seamless user experience",
      ],
      technologies: ["NestJS", "TypeORM", "MySQL", "REST APIs"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-slide-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key projects I've contributed to, showcasing my backend expertise and full-stack capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <project.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {project.title}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            {project.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center space-x-2">
                        <Database className="h-4 w-4 text-primary" />
                        <span>Key Contributions</span>
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="skill-tag"
                        >
                          {tech}
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
