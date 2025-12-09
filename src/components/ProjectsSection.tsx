import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./Button";

const projects: Project[] = [
  {
    id: 1,
    title: "Popular Movies",
    description:
      "A website that allows users to view popular movies and their details, using the TMDB api.",
    image: "/projects/PopularMoviesPage.png",
    tags: ["React", "Javascript", "TMDB API"],
    demoLink: "https://popular-movies-page.vercel.app/",
    gitHubLink: "https://github.com/0Soe0/MoviePage",
    active: true,
  },
  {
    id: 2,
    title: "TCG-Pokemon",
    description:
      "Using the tcg-pokemon api, I created a website that allows users to view pokemon cards and their details.",
    image: "/projects/TCGPokemon.png",
    tags: ["React", "TypeScript", "Next.js"],
    demoLink: "#",
    gitHubLink: "#",
    active: false,
  },

  {
    id: 3,
    title: "EV-olution",
    description:
      "A page made for an imaginary car company with AI generated images using Gemini.",
    image: "/projects/EV-olution.jpg",
    tags: ["React", "Javascript", "react-hot-toast"],
    demoLink: "#",
    gitHubLink: "https://github.com/0Soe0/EV-olutionCarsWebsite",
    active: false,
  },
];

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  gitHubLink: string;
  active: boolean;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-card/10 dark:bg-card rounded-lg overflow-hidden shadow-xs card-hover">
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, key) => (
          <span
            key={key}
            className="text-xs px-2 py-1 bg-secondary rounded-full text-primary font-medium border"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">
        {project.description}
      </p>
      {!project.active ? (
        <div className="flex items-center justify-between">
          <span className="text-primary text-xs">COMING SOON</span>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <a
              href={project.demoLink}
              target="_blank"
              className="text-white darktext-foreground/80 hover:text-black dark:hover:text-primary transition-colors duration-300"
            >
              {" "}
              <ExternalLink size={20} />{" "}
            </a>
            <a
              href={project.gitHubLink}
              target="_blank"
              className="text-white dark:text-foreground/80 hover:text-black dark:hover:text-primary transition-colors duration-300"
            >
              {" "}
              <Github size={20} />{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
);

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        My <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-white dark:text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of the projects I've done, not only to practice my skills
        and learn new things, but also to showcase my work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          className="w-fit mx-auto flex items-center gap-2"
          href="https://github.com/0Soe0/"
          target="_blank"
        >
          Check my GitHub <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  </section>
);
