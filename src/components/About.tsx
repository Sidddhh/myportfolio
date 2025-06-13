import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Code, Brain, Music } from "lucide-react";

const About = () => {
  const achievements = [
    {
      title: "Topper in State Board SSC",
      description: "Ranked 1 in the Maharashtra State Board SSC Examination (2019-2020).",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "https://example.com/ssc-achievement" // Replace with actual link to achievement details
    },
    {
      title: "Course Completion at IIT Bombay",
      description: "Successfully got selected for the course through good CGPA",
      icon: <Brain className="w-6 h-6" />,
      link: "https://example.com/project-achievement" // Replace with actual link to achievement details
    },
    {
      title: "Leadership Award",
      description: "Awarded for exceptional leadership in organizing a tech fest at Vidyalankar Institute of Technology (2023).",
      icon: <Award className="w-6 h-6" />,
      link: "https://example.com/leadership-achievement" // Replace with actual link to achievement details
    },
    {
      title: "Music Composition Award",
      description: "Received first place in a national music composition contest for creating an original soundtrack, showcasing creativity and technical precision applicable to UI/UX design (2024).",
      icon: <Music className="w-6 h-6" />,
      link: "https://example.com/music-achievement" // Replace with actual link to achievement details
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hey! I’m a curious tech enthusiast and full-stack developer who loves building meaningful digital solutions. From developing a gym management system to exploring brain tumor detection using machine learning, I enjoy working on projects that combine creativity with real-world impact.
                Over time, I’ve grown comfortable working across both frontend and backend technologies. These hands-on experiences have taught me much more than theory ever could — from writing clean code to designing user-friendly interfaces and solving practical problems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I’ve also pursued certifications from reputed platforms like IIT Bombay, TCS iON, and MATLAB, which have helped me stay updated with evolving tools and practices in software development. My passion for music further fuels my creativity, allowing me to approach tech challenges with an innovative mindset. I’m always open to new challenges and excited to see where this tech journey takes me next!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Education</h4>
                      <p className="text-muted-foreground">Pursuing Engineering in Information Technology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl mb-2">Focus Areas</h4>
                      <p className="text-muted-foreground">Development | AI ML</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-semibold mb-4">Achievements</h3>
              <p className="text-muted-foreground text-lg">Highlights of my journey and accomplishments</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-card text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold mb-3 text-sm leading-tight">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{achievement.description}</p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        View Details
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;