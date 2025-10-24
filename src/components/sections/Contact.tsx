import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jsg362@drexel.edu",
    href: "mailto:jsg362@drexel.edu",
    description: "Send me an email anytime",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philadelphia, PA",
    href: "#",
    description: "(EST)",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/j-gi11",
    icon: Github,
    description: "View my code repositories",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jagroop--gill/",
    icon: Linkedin,
    description: "Connect with me professionally",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-lg font-semibold text-foreground mb-1">
                              {info.label}
                            </h4>
                            <p className="text-base text-muted-foreground mb-2">
                              {info.description}
                            </p>
                            {info.href.startsWith("mailto:") ||
                            info.href.startsWith("tel:") ? (
                              <a
                                href={info.href}
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Connect With Me
              </h3>

              <div className="space-y-6">
                {/* Social Media Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Social Media</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 0.6 + index * 0.1,
                          }}
                        >
                          <Button
                            variant="outline"
                            className="w-full justify-start h-auto p-4 hover:bg-primary/5 transition-colors"
                          >
                            <social.icon className="mr-3 h-5 w-5" />
                            <div className="text-left">
                              <div className="font-medium">{social.name}</div>
                              <div className="text-xs text-muted-foreground">
                                {social.description}
                              </div>
                            </div>
                          </Button>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
