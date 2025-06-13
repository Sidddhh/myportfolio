
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Brain Tumor Detection",
      description: "A Flask-based web application using a trained CNN model to detect types of brain tumors from MRI images.",
      tech: ["Python", "Flask", "TensorFlow", "CNN", "OpenCV"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      github: "https://github.com/Sidddhh/Brain_Tumour_detection.git",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Gym Management System",
      description: "Web app with admin dashboard, member tracking, and equipment inventory management.",
      tech: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "https://github.com/Sidddhh/GYM_Management_System.git",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Pneumonia Detection using ML",
      description: "Machine learning-powered solution for early detection of pneumonia from chest X-ray images. Utilizes image classification techniques with CNNs (Convolutional Neural Networks) to predict the presence of pneumonia, aiding in faster diagnosis and treatment.",
      tech: [ "Python", "Web Dashboard","CNN","SQLite"],
      image: "https://www.kdnuggets.com/wp-content/uploads/sagar-pneumonia-0.jpeg",
      github: "https://github.com/Sidddhh/Pneumonia_Ai.git",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Department Management System",
      description: "A web-based platform designed to streamline academic department operations. Features include course management, student enrollment, attendance tracking, and teacher dashboards—built using Flask and SQLite for efficient backend handling.",
      tech: ["Python", "HTML/CSS", "JavaScript", "Flask","SQLite"],
      image: "https://vidyalankar.edu.in/wp-content/uploads/2017/02/Auditorium-2.jpg",
      github: "https://github.com/Sidddhh/IT_Department_Management_System.git",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my latest work and innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group border-0">
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="sm" asChild className="flex-1 hover:bg-card/50">
                      <a href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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

export default Projects;
