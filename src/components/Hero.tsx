import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl animate-float delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-primary/5 rounded-full mix-blend-screen filter blur-3xl animate-float delay-2000"></div>
      </div>

      <div className="section-container z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Profile Image - Left Side */}
            <div className="flex-shrink-0 order-1 lg:order-1 mt-16 sm:mt-20 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"></div>
                <Avatar className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary/20 shadow-2xl">
                  <AvatarImage 
                    src="https://i.postimg.cc/J0Xh65fb/572e5eb1-e086-4c57-9c52-bbfb4b04dfd3.jpg" 
                    alt="Siddhesh G" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary/20 to-purple-500/20">
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
              <div className="space-y-8 animate-fade-in">
                {/* Greeting and Name */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-lg md:text-xl text-muted-foreground font-medium">
                      Hello there! 👋
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      I'm <span className="gradient-text">Siddhesh Gharat</span>
                    </h1>
                  </div>
                  
                  <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-semibold">
                    Fresher | Passionate Developer | AI Enthusiast 
                  </p>
                </div>

                {/* Description */}
                <div className="max-w-2xl lg:max-w-none">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    As a passionate fresher and AI enthusiast, I blend development expertise with machine learning to create innovative, user-centric web solutions. Driven by modern technologies, I transform ideas into smart applications that redefine digital experiences.
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-lg">
                  {["Python", "Flask", "TensorFlow", "Html/Css", "SQL", "SQLite", "C"].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 text-sm font-medium glass-card rounded-full hover:scale-105 transition-transform duration-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center lg:justify-start pt-4">
                  <Button 
                    onClick={scrollToAbout} 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Explore My Work
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-6 pt-4">
                  <a 
                    href="https://github.com/Sidddhh" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/20 border border-white/10"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/siddhesh-gharat-434172330/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-card rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/20 border border-white/10"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;