import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Calendar,
  ChevronRight,
  ExternalLink,
  MapPin,
} from "lucide-react";

interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: [
      "Led the development of a React-based dashboard that increased user engagement by 40%",
      "Collaborated with UX designers to implement responsive designs across all platforms",
      "Mentored junior developers and conducted code reviews to maintain high quality standards",
    ],
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://techinnovations.com",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    location: "Boston, MA",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Developed and maintained multiple client-facing web applications",
      "Implemented state management solutions using Redux and Context API",
      "Optimized application performance resulting in 30% faster load times",
    ],
    skills: ["JavaScript", "React", "Redux", "SCSS"],
    link: "https://digitalsolutions.com",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Creative Web Agency",
    location: "New York, NY",
    period: "Jun 2018 - Feb 2019",
    description: [
      "Assisted in building responsive websites for various clients",
      "Learned modern web development practices and tools",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "https://creativewebagency.com",
  },
];

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            My professional journey through various roles and companies that
            have shaped my expertise and skills.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/80 via-primary to-primary/30"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>

                {/* Content */}
                <div
                  className={`flex-1 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pl-0 md:pr-12 text-left"
                      : "md:pr-0 md:pl-12 text-left"
                  } pl-10 md:pl-0`}
                >
                  <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg shadow-lg border border-border/50 h-full">
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="text-primary hover:text-primary/80 transition-colors"
                          aria-label={
                            expandedId === exp.id
                              ? "Collapse details"
                              : "Expand details"
                          }
                        >
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${
                              expandedId === exp.id ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedId === exp.id ? "max-h-96 mt-3" : "max-h-0"
                        }`}
                      >
                        <ul className="space-y-2 mt-2 text-sm">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            Visit company
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
