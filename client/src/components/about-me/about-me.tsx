import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import profileImg from "@/assets/avatar.jpg";
import Experience from "./experience-vertical";

export function AboutMe() {
  return (
    <section className="w-full h-full flex flex-col items-center sm:gap-16 gap-6">
      <div className="w-fit pointer-events-none whitespace-pre-wrap text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none">
        Yashdeep Tandon
      </div>

      <Card className="leading-8 text-justify w-[70%] h-fit min-w-[400px] mt-10 sm:mt-10">
        <CardHeader className="w-full flex flex-row gap-4 items-center">
          <Avatar className="w-12 h-12">
            <AvatarImage src={profileImg} alt="@Me" />
            <AvatarFallback>YDT</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Who I Am</CardTitle>
            <CardDescription>
              Software Developer | Frontend Developer @GoTrust
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          Yashdeep is a driven software engineer hailing from Noida, India. His
          journey with computers began in 6th grade when he first explored the
          inner workings of a cpu. Growing up, he had the opportunity to live in
          various cities across india due to his father's job, which instilled
          in him a love for exploring new things. Despite initial struggles with
          academics, yashdeep excelled in a variety of extracurricular
          activities, including cricket, table tennis, swimming, badminton,
          drums, and piano. He even played under-16 cricket for jammu. When his
          family moved to meerut, yashdeep shifted his focus to academics due to
          the lack of extracurricular options. His dedication paid off, as he
          scored a perfect 10 cgpa in class 10th. Although he didn't clear the
          jee exam, as his primary interest was in software and technology, he
          persevered and enrolled in a tier-3 college. During this time, he
          discovered a passion for poker, which helped support his family
          financially during the challenging times brought on by the covid-19
          pandemic. In just four years, he made close to 50 lakhs, which covered
          his college fees and provided much-needed assistance to his loved
          ones. Throughout his college years, yashdeep thrived, making great
          friends, going on trips, and learning a great deal. despite a tough
          job market, he secured a position in january of his final year and is
          currently working at the same company, where he is building new
          projects from scratch and excelling in his chosen field. yashdeep is
          also a dedicated gym enthusiast and has successfully transformed his
          body, losing nearly 20 kgs over the course of four years. He is
          confident in his abilities as a software developer, particularly with
          reactjs, and is known for his quick learning skills and
          problem-solving abilities. With a strong work ethic and a passion for
          personal growth, yashdeep is poised for success in both his
          professional and personal life.
        </CardContent>
      </Card>

      <Experience />
    </section>
  );
}
