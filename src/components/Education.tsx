import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Education = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "IT Engineering",
      institution: "Vidyalankar Institute of Technology",
      year: "2022 - Pursuing",
      description: "CGPA - 9.56",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://images.shiksha.com/mediadata/images/1516603302phpz0SEMq.jpeg",
      link: "https://drive.google.com/file/d/1c8r7NoTE53k17ETDqRj6X45LShLRPUjA/view?usp=sharing" // Replace with actual certificate/mark sheet link
    },
    {
      degree: "Higher Secondary Certificate (HSC) | Science",
      field: "Maharashtra State Boards Examinations",
      institution: "Dharmveer Aanand Dighe Vidyalay",
      year: "2020 - 2022",
      description: "Percentage - 82.50%",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://content3.jdmagicbox.com/v2/comp/mumbai/c2/022pxx22.xx22.230701124707.t7c2/catalogue/0wxntq1np6q78h7-kdiw624prd.jpg",
      link: "https://drive.google.com/file/d/1m2GA8qbkMnCY5UOVy1gMysNqlAhS8tLu/view?usp=sharing" // Replace with actual certificate/mark sheet link
    },
    {
      degree: "Secondary School Certificate (SSC)",
      field: "Maharashtra State Boards Examination",
      institution: "New Ideal School Vasind",
      year: "2019 - 2020",
      description: "Percentage - 95.60%",
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://yt3.googleusercontent.com/C1Hk-rIMoYirtDc2QrHU74albj1Xey-JaAxG-lex15S5bD1nAHmODZQGL0X05hn3O7_YPyTi-g=s900-c-k-c0x00ffffff-no-rj",
      link: "https://drive.google.com/file/d/1mbXBKhIzBXok317vhwa6e3aiYdcdPArr/view?usp=sharing" // Replace with actual certificate/mark sheet link
    }
  ];

  const certifications = [
    {
      title: "Digital System Design and Verification",
      issuer: "IIT Bombay",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
      link: "https://drive.google.com/file/d/1eL2GwE60IY7eBd9SGyoDW2Rjb_A35c7z/view?usp=drive_link"
    },
    {
      title: "MATLAB Fundamentals",
      issuer: "MathWorks",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-500",
      link: "https://drive.google.com/file/d/13ryXi4ySHDo7yWQBA46VFz2bdcizeRV4/view?usp=drive_link"
    },
    {
      title: "Introduction to Neural Networks",
      issuer: "Simple Learn",
      year: "2024",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-green-500 to-emerald-500",
      link: "https://drive.google.com/file/d/1RP961h74IrfvkK5xTG24y3Ay3O4WH2oA/view?usp=drive_link"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte via (Forage)",
      year: "2025",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-blue-500 to-pink-500",
      link: "https://drive.google.com/file/d/1HAjPrIQs_z-iTQ6h0neoooaUCp7U4vtg/view?usp=sharing"
    },
    {
      title: "Introduction to Soft Skills",
      issuer: "TCS iON",
      year: "2023",
      icon: <Award className="w-5 h-5" />,
      gradient: "from-red-500 to-yellow-500",
      link: "https://drive.google.com/file/d/14kIb3TY6FHTJHnaySfj_GyISilYGFuss/view?usp=drive_link"
    }
  ];

  return (
    <section id="education" className="py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${sectionVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
            <h2 className="text-5xl font-bold mb-6 gradient-text">Education & Certifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Academic foundation and continuous learning journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          {/* Education */}
          <div className={`mb-16 ${sectionVisible ? 'scroll-visible animate-slide-up-delay-1' : 'scroll-hidden'}`}>
            <h3 className="text-3xl font-semibold mb-8 text-center">Education</h3>
            <div className="max-w-6xl mx-auto">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`glass-card hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6 ${
                    sectionVisible 
                      ? `scroll-visible animate-slide-up-delay-${Math.min(index + 2, 5)}` 
                      : 'scroll-hidden'
                  }`}
                >
                  <CardContent className="p-12">
                    <div className="flex flex-col md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center">
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h4 className="text-xl font-semibold">{edu.degree}</h4>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.year}
                            </div>
                          </div>
                          <p className="text-primary font-medium mb-2">{edu.field}</p>
                          <p className="text-muted-foreground mb-3">{edu.institution}</p>
                          <p className="text-foreground/80 mb-4">{edu.description}</p>
                          {edu.link && (
                            <a
                              href={edu.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                            >
                              View Certificate
                            </a>
                          )}
                        </div>
                        {edu.image && (
                          <img
                            src={edu.image}
                            alt={`${edu.institution} logo`}
                            className="w-56 h-56 object-cover rounded-md mt-4 md:mt-0 md:ml-8 flex-shrink-0"
                          />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`glass-card w-[280px] text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group animate__animated animate__fadeInUp animate__delay-${index}s`}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cert.icon}
                    </div>
                    <h4 className="font-semibold mb-3 text-sm leading-tight">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                    <p className="text-primary text-xs font-medium mb-4">{cert.year}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-blue-600 border border-blue-600 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        View Certificate
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>); };

export default Education;