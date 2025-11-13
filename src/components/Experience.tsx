import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Support Executive",
      company: "Mellon Information Technology",
      location: "Abu Dhabi, UAE",
      type: "Service-Based",
      duration: "Current Position",
      responsibilities: [
        "Provided technical support for enterprise software systems",
        "Resolved client issues and improved customer satisfaction",
        "Documented technical solutions and best practices",
        "Worked closely with development teams on bug fixes",
      ],
    },
    {
      title: "Software Engineer",
      company: "Logezy Infotech Private Limited",
      location: "Remote",
      type: "Product-Based",
      duration: "Previous Role",
      responsibilities: [
        "Designed and developed RESTful APIs for enterprise applications",
        "Optimized database queries resulting in improved system performance",
        "Implemented multi-tenant database architecture for scalable solutions",
        "Collaborated with cross-functional teams to deliver features on time",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12 animate-slide-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <Badge className="bg-primary text-primary-foreground self-start md:self-auto">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
