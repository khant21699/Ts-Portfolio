import { motion } from "framer-motion";
import { Pages } from "../shared";
import EvoGym from "../assets/EvoGym.png";
import Netflix from "../assets/Netflix.png";
import Portfolio from "../assets/Portfolio.png";
import RNMovie from "../assets/RNMovie.png";
import News from "../assets/NewsApp.png";
import Food from "../assets/FoodRecipe.png";
import PleasureDomes from "../assets/pleasuredomes.png";
import RabbitReader from "../assets/rabbit-reader.jpg";
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
  githubUrl?: string;
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
    className="group relative"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all"
            >
              <FiExternalLink size={20} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/20 flex items-center justify-center text-purple-400 transition-all"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-black">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Projects({ setCurrentPage }: Props) {
  const workProjects = [
    {
      title: "Rabbit Reader",
      description:
        "An AI-powered teaching assistant by Urvin.AI designed to answer student questions on assigned reading material and guide them through assignments by linking concepts throughout the material. Features include secure PDF viewing, text and graphics extraction, offensive word checking, custom glossary integration, and efficient n-gram processing. Perfect for document management and secure remote access to company documents.",
      techs: [
        "AI/ML",
        "PDF Processing",
        "Document Management",
        "Secure Access",
      ],
      image: RabbitReader,
    },
    {
      title: "Pleasure Domes.ai",
      description:
        "A premium AI companion platform where users can build, flirt, and interact with AI characters. Features include character creation tools, public character discovery, chat functionality, and a gallery system. The platform supports various character categories including real human, fictional, anime, and custom characters with advanced filtering and search capabilities.",
      techs: ["AI/ML", "Character Creation", "Chat System", "User Interface"],
      image: PleasureDomes,
      liveUrl: "https://www.pleasuredomes.ai/",
    },
  ];

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
    <section
      id={Pages.Works}
      className="py-32 px-6 relative overflow-hidden bg-black grid-pattern"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 left-20 w-32 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
      <div className="absolute bottom-32 right-20 w-32 h-px bg-gradient-to-l from-purple-500/20 to-transparent" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-40 left-1/3 w-2 h-2 bg-cyan-500 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        onViewportEnter={() => setCurrentPage(Pages.Works)}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-5 py-2 border border-cyan-500/30 rounded-full mb-4 text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web
            development
          </p>
        </motion.div>

        {/* Work Projects Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Work Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {workProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                techs={project.techs}
                image={project.image}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Personal Projects
          </h3>
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
                index={index + workProjects.length}
              />
            ))}
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/khant21699"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full border border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 font-semibold transition-all hover:scale-105"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
