import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Android Development Certification",
      institution: "LCC Creative Education",
      year: "2021",
      description: "Internship focused on Android app development using Java",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Calicut University",
      year: "2018 - 2021",
      description: "Focused on software development, data structures, and algorithms",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sree Krishna Higher Secondary School Guruvayoor",
      year: "2016 - 2018",
      description: "Foundation in science and mathematics",
    },
  ];

  return (
  <section id="education" className="py-20 px-4 section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>

          <div className="space-y-6 animate-fade-in">
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 shadow-medium hover:shadow-large transition-smooth group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{item.degree}</h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;