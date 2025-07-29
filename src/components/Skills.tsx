import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Brain, Globe, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Canva AI"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Flask"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "SQLite", "MySQL", "Database Design"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "CNN", "Model Training", "Kaggle", "Jupyter Notebook"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Git", "MATLAB", "VS Code"],
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-muted/10 to-background flex items-center justify-center min-h-[50vh]" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-10 ${sectionVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              A curated toolkit for crafting modern, intelligent applications
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`glass-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 overflow-hidden w-full max-w-[300px] ${
                  sectionVisible 
                    ? `scroll-visible animate-slide-up-delay-${Math.min(index + 1, 4)}` 
                    : 'scroll-hidden'
                }`}
              >
                <CardContent className="p-4">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center">{category.title}</h3>
                  <div className="space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center justify-between px-2 py-1 rounded-md hover:bg-card/20 transition-colors duration-200"
                      >
                        <span className="text-xs font-medium">{skill}</span>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      </div>
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

export default Skills;