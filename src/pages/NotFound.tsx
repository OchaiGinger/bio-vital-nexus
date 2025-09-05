import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-backdrop flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="font-eurostile text-6xl md:text-8xl font-bold text-neon-cyan">404</h1>
          <h2 className="font-eurostile text-2xl md:text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="font-roboto text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a new location.
          </p>
        </div>
        
        <div className="glass-card p-8 max-w-sm mx-auto">
          <Button variant="glass-primary" asChild className="w-full group">
            <a href="/">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
