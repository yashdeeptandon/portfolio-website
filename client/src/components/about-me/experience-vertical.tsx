import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Sample experience data - replace with your own
const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "GoTrust Pvt Ltd.",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D560BAQGyIXH2WGJ2AA/company-logo_200_200/B56ZXQ2QKHGcAI-/0/1742965639147/gotrust_tech_logo?e=1749081600&v=beta&t=uERu0GTDe9L9MPH4zb6p6wnykV5oUdH0h8UL1LrdRB0",
    location: "Noida, India",
    period: "Jul 2024 - Present",
    description:
      "Led the development of responsive web application using React, Tailwind CSS and TypeScript. Improved site performance by 40% through code optimization and modern rendering techniques.",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Redux",
      "React Query",
    ],
    achievements: [
      "Developed a GoTrust from scratch, including designing and implementing the signup and login flows, CRM functionalities, role management, policies and other functionalities.",
      "Mentored junior developers and established frontend best practices",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    company: "Appvin Technologies",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C560BAQH6c2TfAd32aw/company-logo_200_200/company-logo_200_200/0/1644518059949/appvin_app_web_logo?e=1749081600&v=beta&t=f5nkF_LT031QnKn9_APOa62kMcCyfzSB9Xc0tnPfLjY",
    location: "Noida, India",
    period: "Jan 2024 -Jul 2024",
    description:
      "Developed and maintained multiple client-facing web applications. Collaborated with designers to implement pixel-perfect UI components.",
    skills: ["JavaScript", "React", "CSS", "HTML", "Material UI"],
    achievements: [
      "Develop and maintain frontend components using HTML, CSS, TypeScript, and ReactJS within the Appvin Technologies platform",
      "Created reusable component library reducing development time by 30%",
      "Utilize Redux Toolkit to manage application state and create a centralized store for efficient data management.",
      "Received employee of the month award for exceptional performance",
    ],
  },
];

export default function ExperienceSectionVertical() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and the skills I've developed
            along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border" />

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:pr-12 md:ml-auto md:mr-[50%]"
                  : "md:pl-12 md:mr-auto md:ml-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-6 -left-1.5 md:left-auto md:-right-1.5 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                style={{
                  [index % 2 === 0 ? "right" : "left"]: "0",
                  transform: "translateX(-50%)",
                }}
              />

              <Card className="relative overflow-hidden border-border/40 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                    <span className="mx-1">•</span>
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                    {/* <Briefcase className="h-5 w-5 text-primary" /> */}
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={experience.companyLogo} alt="@Me" />
                      <AvatarFallback>YDT</AvatarFallback>
                    </Avatar>
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {experience.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {expandedId === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2"
                    >
                      <h4 className="font-medium">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(experience.id)}
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 -ml-2"
                  >
                    {expandedId === experience.id ? "Show Less" : "Show More"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
