import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Suvidha Foundation",
      duration: "June 2024 - August 2024",
      description: "Developed and maintained features for the Suvidha Internship Portal, a web platform connecting students with internship opportunities. Implemented responsive UI components and integrated backend APIs to enhance user experience.",
      tech: ["HTML/CSS", "JavaScript", "MySQL", "Tailwind CSS", "Deployment", "Flask", "Python"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-muted/10 to-background flex items-center justify-center min-h-[50vh]">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Real-world experience building impactful solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 overflow-hidden w-full max-w-[90vw] sm:max-w-[400px]"
              >
                <CardHeader className="p-6 pb-3">
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-center">{exp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center">{exp.company}</p>
                  <p className="text-sm text-muted-foreground text-center">{exp.duration}</p>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{exp.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs font-medium px-2 py-1 rounded-full bg-card/20"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;