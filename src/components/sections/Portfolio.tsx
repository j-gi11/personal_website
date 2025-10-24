import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "IoT Sensor Data Monitoring",
    description: `
      I designed, built, and deployed a complete, end-to-end IoT platform to capture and visualize real-time environmental data. The system originates with custom-built wireless sensor modules, each powered by an ESP8266 microcontroller and a BME 280 sensor, which are held by custom-designed 3D printed cases. These modules wirelessly transmit temperature, humidity, and pressure readings to a central Python server running on a Raspberry Pi. <br /><br />

      The data processing and visualization backend is a fully Dockerized stack running on a Mac Mini. The Python server publishes all sensor data to a Mosquitto (MQTT) broker. This broker, along with Telegraf, InfluxDB, and Grafana, all run as containerized services. Telegraf subscribes to the MQTT topics, collects the data, and writes it to the InfluxDB time-series database. Finally, Grafana queries the database to provide a dynamic, real-time dashboard for monitoring. <br /><br />

      To ensure the entire system is robust and maintainable, I also implemented an Over-the-Air (OTA) update system, allowing me to deploy new firmware to all sensor modules remotely. This is complemented by a remote logging solution that enables real-time monitoring and debugging of the distributed sensors without requiring physical access. <br/><br />
      
      What's in progress: <br/>
      - Creating another wireless module to put in one of our temp/pressure controlled glove boxes to remotely monitor.<br />
      - Making a dashboard that monitors devices in our internal network to see if they are reachable via the ping command.`,
    videoUrl: "https://drexel0-my.sharepoint.com/:v:/g/personal/jsg362_drexel_edu/EfoQvzO4QaVJqtR7seUQn5QB67XQBDesPGVwObfdDqZZsg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZlYUoi",
    githubUrl: "https://drexel0-my.sharepoint.com/:f:/g/personal/jsg362_drexel_edu/EvxR04iiKlJLpJWCrHgxP54BWevbfXUArUmA2K9zRnLGOQ?e=eQ3qnX",
    technologies: [
      "Docker",
      "Grafana",
      "InfluxDB",
      "MQTT",
      "Python",
      "Arduino",
      "C++",
      "Linux"
    ],
  },
  {
    id: 2,
    title: "Personal Website",
    description: `I first built this using plain HTML, CSS, and JavaScript, which was a great way to learn the fundamentals. But as I grew as an engineer and really got into React, I knew I had to upgrade. I rebuilt the entire site from scratch in React, making it way easier to manage and update. It was a fun personal challenge to make sure the site showing my work also uses the modern skills I'm proud of.`,
    videoUrl: "",
    githubUrl: "https://github.com/j-gi11/personal_website",
    technologies: [
      "React",
      "TypeScript",
      "GitHub Actions",
      "Node.js"
    ],
  },
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that I've worked on.
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-12 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl mb-3">
                      {project.title}
                    </CardTitle>
                    <div
                      className="text-base text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.videoUrl && (
                        <Button
                          size="default"
                          variant="outline"
                          className="flex-1"
                          onClick={() =>
                            window.open(project.videoUrl, "_blank")
                          }
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Watch Video
                        </Button>
                      )}
                      <Button
                        size="default"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
