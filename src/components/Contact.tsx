import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate timestamp: "11:28 PM IST on Friday, June 13, 2025"
    const time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_bd3k5kj",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_h5wliuw",
        {
          title: "New Contact Form Submission",
          name: formData.name,
          to_name: "Siddhesh Gharat",
          time: time,
          from_email: formData.email,
          message: formData.message,
          email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_USER_ID || "mRM5a8Lx0Rm7b3Vn6"
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "siddgharat45@gmail.com",
      href: "mailto:siddgharat45@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Sidddhh",
      href: "https://github.com/Sidddhh",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Siddhesh Gharat",
      href: "https://www.linkedin.com/in/siddhesh-gharat-434172330/",
      gradient: "from-blue-600 to-blue-800",
    },
  ];

  return (
    <section ref={sectionRef}
      id="contact"
      className="py-16 bg-gradient-to-br from-background to-muted/10 flex items-center justify-center min-h-[50vh]"
    >
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-10 ${sectionVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Let's collaborate and bring your ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  I'm open to new opportunities and collaborations. Whether you have a project or just want to discuss tech, reach out!
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 glass-card rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${contact.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{contact.label}</p>
                      <p className="text-muted-foreground text-xs">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Card className="glass-card border-0 shadow-xl max-w-[95vw] sm:max-w-[700px] ">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg bg-background/50"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-lg bg-background/50"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-lg bg-background/50"
                  />
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;