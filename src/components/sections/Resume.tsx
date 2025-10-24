import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Calendar, MapPin } from "lucide-react";
import epcLogo from "@/imgs/icons/epc.jpg";
import qvcLogo from "@/imgs/icons/qvc.png";
import upsLogo from "@/imgs/icons/ups.png";
import phillyPretzelLogo from "@/imgs/icons/philly_pretzel_factory.png";


const workExperience = [
  {
    id: "1",
    company: "EPC (Executive Personal Computers)",
    position: "IT Processing Technician - Full Time",
    location: "Bethlehem, PA",
    startDate: "Jun 2023",
    endDate: "Sep 2023",
    logo: epcLogo,
    description:
      "ITAD Technician specializing in secure data destruction, hardware diagnostics, and asset auditing.",
    responsibilities: [
      "Executed secure data destruction and sanitization procedures on end-of-life IT assets (PCs, laptops, hard drives), ensuring 100% compliance with data privacy protocols.",
      "Conducted detailed diagnostics, functional testing, and cosmetic audits of electronic devices to assess condition and resale eligibility.",
      "Meticulously documented asset conditions, test results, and secure data erasure records in the company's inventory management software.",
      "Cleaned and prepared audited IT equipment to meet quality standards for resale or transfer.",
      "Consistently met and exceeded daily production quotas specifically for data wiping and technical auditing.",
      "Specialized in the data-sensitive stages of the ITAD process, focusing on secure data sanitization and accurate asset evaluation.",
    ],
    technologies: [],
  },
  {
    id: "2",
    company: "QVC (Quality Value Convenience)",
    position: "Team Member (Receiving) - Full Time",
    location: "Bethlehem, PA",
    startDate: "Jun 2022",
    endDate: "Sep 2022",
    logo: qvcLogo,
    description:
      "Inbound Warehouse Associate specializing in receiving, sorting, and processing freight using RF scanners and manual pallet jacks.",
    responsibilities: [
      "Efficiently unloaded and processed high volumes of inbound freight from delivery trucks in a fast-paced fulfillment center environment.",
      "Operated manual pallet jacks to safely transport incoming inventory from the receiving dock to designated staging areas.",
      "Meticulously sorted, stacked, and palletized incoming products, verifying items against shipping manifests and labels to ensure inventory accuracy.",
      "Utilized handheld RF scanners and a stationary PC to accurately receive and log all inbound assets into the warehouse management system.",
      "Consistently met and exceeded daily team goals for productivity, quality, and safety within the receiving department.",
      "Maintained a clean, safe, and organized receiving dock to ensure operational efficiency and compliance with safety standards.",
    ],
    technologies: [],
  },
  {
    id: "3",
    company: "UPS (United Parcel Service)",
    position: "Package Handler - Part Time",
    location: "Nazareth, PA",
    startDate: "May 2021",
    endDate: "Jun 2022",
    logo: upsLogo,
    description:
      "Package Handler proficient in high-volume unloading and complex, high-speed sorting logic.",
    responsibilities: [
      "Rapidly unloaded and processed high volumes of packages from inbound trailers in a physically demanding, fast-paced hub environment.",
      "Mastered complex sorting patterns, accurately reading package labels and routing items to the correct conveyor belts for outbound delivery.",
      "Consistently met and exceeded team productivity and accuracy goals for package handling and sorting.",
      "Safely and continuously lifted and handled packages weighing up to 70 lbs, adhering to all safety protocols.",
      "Collaborated with the unload team to ensure a continuous and efficient flow of packages from the trailer to the sortation system.",
    ],
    technologies: [],
  },
  {
    id: "4",
    company: "Philly Pretzel Factory",
    position: "Baker - Part Time",
    location: "Nazareth, PA",
    startDate: "May 2021",
    endDate: "Jun 2022",
    logo: phillyPretzelLogo,
    description:
      "Baker and Team Member skilled in high-volume dough production, POS operation, and direct customer service.",
    responsibilities: [
      "Executed all stages of daily pretzel production, including mixing dough, hand-twisting, and baking in-store to ensure product freshness.",
      "Provided direct, front-line customer service, greeting patrons, taking orders, and managing cash and credit transactions on a POS system.",
      "Balanced back-of-house (BOH) baking schedules with front-of-house (FOH) customer demand in a fast-paced retail environment.",
      "Maintained a clean and sanitary work environment, adhering to all food safety and quality control standards.",
      "Managed opening and closing procedures, including preparing the first batches of the day, restocking, and nightly equipment cleaning.",
      "Handled customer inquiries and prepared large-scale 'party tray' orders, ensuring accuracy and timely fulfillment.",
    ],
    technologies: [],
  },
];

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please click on my resume to see my most current work experience.
            Below is additional work experience not listed on my resume.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <Button size="lg" className="text-base px-8 py-3" asChild>
              <a href="public/resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </a>
            </Button>
          </motion.div>

          {/* Work Experience Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <AccordionItem
                    value={job.id}
                    className="border border-border rounded-lg"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline w-full">
                      <div className="flex items-center space-x-4 text-left w-full">
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-lg object-cover"
                            src={job.logo}
                            alt={`${job.company} logo`}
                          />
                        </div>

                        {/* Job Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-foreground">
                                {job.position}
                              </h3>
                              <p className="text-base text-primary font-medium">
                                {job.company}
                              </p>
                            </div>
                            <div className="flex flex-col items-end mt-2 sm:mt-0 sm:ml-4">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>
                                  {job.startDate} - {job.endDate}
                                </span>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">
                      <div className="space-y-6">
                        {/* Description */}
                        <p className="text-muted-foreground">
                          {job.description}
                        </p>

                        <Separator />

                        {/* Responsibilities */}
                        <div>
                          <ul className="space-y-2">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">
                                  •
                                </span>
                                <span className="text-muted-foreground">
                                  {responsibility}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {job.technologies.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, idx) => (
                                <Badge
                                  key={idx}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
