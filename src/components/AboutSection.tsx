import { Code, User, Briefcase } from "lucide-react";
import { Button } from "./Button";
import { smoothScrollTo } from "../lib/utils";

type AboutSectionCards = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const aboutSectionCards: AboutSectionCards[] = [
  {
    icon: Code,
    title: "Web development",
    description:
      "I have mostly worked with websites throughout my academic career, but I'm willing to learn anything mobile related as well!",
  },
  {
    icon: User,
    title: "Work mates",
    description:
      "Teamwork makes the dream work! Learning from and with each other let us grow not only as professionals, but as people, that's my philosophy.",
  },

  {
    icon: Briefcase,
    title: "Growth",
    description:
      "I'm excited to learn and practice new things, not only in the development field, but in other work related areas and in life in general.",
  },
];

const AboutSectionCard = ({ card }: { card: AboutSectionCards }) => (
  <div className="gradient-border bg-card/10 dark:bg-card p-6 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-primary/10">
        <card.icon className="w-6 h-6 text-foreground dark:text-primary"></card.icon>
      </div>
      <div className="text-left">
        <h4 className="font-semibold text-lg">{card.title}</h4>
        <p className="text-white dark:text-muted-foreground">
          {card.description}
        </p>
      </div>
    </div>
  </div>
);

export const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-muted-foreground">
                Information technology analyst student at ORT
              </h3>

              <p className="text-white dark:text-muted-foreground">
                I'm a big enthusiast of frontend development with basic
                knowledge of Javascript, Typescript, React, Tailwind CSS (using
                it for the very first time in this project!), and some other
                libraries. I've been studying for a couple of years now,
                recieving a diploma as a web developer in the process and
                looking forward to finish my career soon.
              </p>

              <p className="text-white dark:text-muted-foreground">
                I'm also a big enthusiast of design and animation, and it's on
                my plans to learn more about it in the future! <br />
                (Unrelated, but I also love videogames, so if we don't get to
                work together, we could play something instead! haha)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
                <Button onClick={() => smoothScrollTo("#contact", 1200)}>
                  Get in touch
                </Button>
                <Button
                  className="hover:bg-primary/10 white-hover"
                  hollow
                  href="/SophiaFacalCV.pdf"
                  download
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {aboutSectionCards.map((card, index) => (
                <AboutSectionCard key={index} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
