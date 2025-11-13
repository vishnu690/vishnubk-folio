import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center space-x-2">
          <span>© {currentYear} Vishnu B Kumar — Built with</span>
          <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          <span>and precision.</span>
        </p>
      </div>
    </footer>
  );
};
