import { motion } from "framer-motion";
import { Pages } from "../shared";
import EvoGym from "../assets/EvoGym.png";
import Netflix from "../assets/Netflix.png";
import Portfolio from "../assets/Portfolio.png";
import RNMovie from "../assets/RNMovie.png";
import News from "../assets/NewsApp.png";
import Food from "../assets/FoodRecipe.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  techs,
  image,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) => (
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-gray-900 rounded-lg hover:bg-blue-500 transition-colors duration-300 text-sm font-medium"
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
        >
          <FiGithub size={16} />
          Code
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Projects({ setCurrentPage }: Props) {
  const projects = [
    {
      title: "EvoGym",
      description:
        "A modern fitness gym website with responsive design, interactive animations, and optimized user experience.",
      techs: ["React.js", "TypeScript", "Tailwind CSS"],
      image: EvoGym,
      liveUrl: "https://evo-fitness-gym.netlify.app/",
      githubUrl: "https://github.com/khant21699/EvoGym-Ts-React",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website showcasing my projects and skills with modern design and smooth animations.",
      techs: ["React.js", "TypeScript", "Tailwind CSS"],
      image: Portfolio,
      githubUrl: "https://github.com/khant21699/Ts-Portfolio",
    },
    {
      title: "Netflix Clone",
      description:
        "A Netflix replica with movie browsing, search functionality, and responsive design using TMDB API.",
      techs: ["React.js", "Redux", "TMDB API"],
      image: Netflix,
      liveUrl: "https://movie-nefflix-cline-app.netlify.app/",
      githubUrl: "https://github.com/khant21699/netflixClone",
    },
    {
      title: "Movie Mobile App",
      description:
        "A React Native mobile application for browsing movies with native styling and smooth performance.",
      techs: ["React Native", "TMDB API", "Nativewind"],
      image: RNMovie,
      githubUrl: "https://github.com/khant21699/ReactNative-MovieApp",
    },
    {
      title: "Food Recipes App",
      description:
        "A recipe discovery app with search functionality, detailed recipes, and responsive design.",
      techs: ["Next.js", "Tailwind CSS", "themealdb.com API"],
      image: Food,
      liveUrl: "https://food-recipes-nextjs-sux3.vercel.app/",
      githubUrl: "https://github.com/khant21699/food-recipes-nextjs",
    },
    {
      title: "News App",
      description:
        "A real-time news application with category filtering, search, and modern responsive interface.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "MediaStack API"],
      image: News,
      liveUrl: "https://live-news-next-app.vercel.app/",
      githubUrl: "https://github.com/khant21699/NewsApp-Next",
    },
  ];

  return (
    <section id={Pages.Works} className="py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        onViewportEnter={() => setCurrentPage(Pages.Works)}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-400">#</span>My Work
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in frontend
            development, from responsive websites to mobile applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techs={project.techs}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
