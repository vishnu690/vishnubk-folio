import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vbkumar690@gmail.com",
      href: "mailto:vbkumar690@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/vishnu-b-kumar-50890724a/",
      color: "text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 section-bg">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className={`space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((contact, index) => (
              <Card
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <CardContent className="p-8">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-4 text-center group"
                  >
                    <div className={`p-4 rounded-full bg-accent group-hover:bg-accent/80 transition-colors ${contact.color}`}>
                      <contact.icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {contact.label}
                      </h3>
                      <p className="text-muted-foreground break-all">
                        {contact.value}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="mt-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      Get in Touch
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className={`border-0 shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
              </p>
              <Button
                size="lg"
                onClick={() => window.location.href = "mailto:vbkumar690@gmail.com"}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                Send Me an Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
