import { motion } from "framer-motion";
import { useState } from "react";
import { Pages } from "../shared";
import EvoGym from "../assets/EvoGym.png";
import Netflix from "../assets/Netflix.png";
import Portfolio from "../assets/Portfolio.png";
import RNMovie from "../assets/RNMovie.png";
import News from "../assets/NewsApp.png";
import Food from "../assets/FoodRecipe.png";
import PleasureDomes from "../assets/pleasuredomes.png";
import PleasureDome from "../assets/pleasuredome.png";
import RabbitReader from "../assets/rabbit-reader.jpg";

type Project = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
};

const featured: Project[] = [
  {
    title: "Rabbit Reader",
    description:
      "An AI-powered teaching assistant by Urvin.AI that answers student questions on assigned reading material and guides them through assignments by linking concepts across the text. Includes secure PDF viewing, text and graphics extraction, custom glossaries, and efficient n-gram processing.",
    techs: ["AI/ML", "PDF Processing", "Document Management", "Secure Access"],
    image: RabbitReader,
    year: "2025",
    role: "Frontend Engineer",
  },
  {
    title: "pleasuredomes.ai",
    description:
      "A premium AI companion platform where users build, flirt with, and interact with AI characters. Character creation tools, public character discovery, chat, and a curated gallery across real-human, fictional, anime, and custom categories.",
    techs: ["AI/ML", "Character Creation", "Chat System", "User Interface"],
    image: PleasureDomes,
    liveUrl: "https://www.pleasuredomes.ai/",
    year: "2024",
    role: "Frontend Engineer",
  },
  {
    title: "pleasuredome.ai",
    description:
      "Companion product to pleasuredomes.ai. A subscription platform built around AI Influencers, where fans follow individual AI creators, chat with them privately, and unlock exclusive posts and personalized content.",
    techs: ["AI/ML", "Subscriptions", "Conversational UI", "Persona Design"],
    image: PleasureDome,
    liveUrl: "https://www.pleasuredome.ai/",
    year: "2024",
    role: "Frontend Engineer",
  },
];

const archive: Project[] = [
  {
    title: "EvoGym",
    description:
      "Modern fitness gym website with responsive design, interactive animations, and an optimized user experience.",
    techs: ["React.js", "TypeScript", "Tailwind"],
    image: EvoGym,
    liveUrl: "https://evo-fitness-gym.netlify.app/",
    githubUrl: "https://github.com/khant21699/EvoGym-Ts-React",
    year: "2024",
    role: "Build & Design",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio showcasing projects and skills with modern design and smooth animations.",
    techs: ["React.js", "TypeScript", "Tailwind"],
    image: Portfolio,
    githubUrl: "https://github.com/khant21699/Ts-Portfolio",
    year: "2024",
    role: "Build & Design",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix replica with movie browsing, search, and responsive design powered by the TMDB API.",
    techs: ["React.js", "Redux", "TMDB API"],
    image: Netflix,
    liveUrl: "https://movie-nefflix-cline-app.netlify.app/",
    githubUrl: "https://github.com/khant21699/netflixClone",
    year: "2023",
    role: "Build",
  },
  {
    title: "Movie Mobile App",
    description:
      "A React Native mobile application for browsing movies with native styling and smooth performance.",
    techs: ["React Native", "TMDB API", "Nativewind"],
    image: RNMovie,
    githubUrl: "https://github.com/khant21699/ReactNative-MovieApp",
    year: "2023",
    role: "Build",
  },
  {
    title: "Food Recipes App",
    description:
      "A recipe discovery app with search, detailed recipes, and responsive design.",
    techs: ["Next.js", "Tailwind", "themealdb API"],
    image: Food,
    liveUrl: "https://food-recipes-nextjs-sux3.vercel.app/",
    githubUrl: "https://github.com/khant21699/food-recipes-nextjs",
    year: "2023",
    role: "Build",
  },
  {
    title: "News App",
    description:
      "Real-time news application with category filtering, search, and a modern responsive interface.",
    techs: ["Next.js", "TypeScript", "Tailwind", "MediaStack"],
    image: News,
    liveUrl: "https://live-news-next-app.vercel.app/",
    githubUrl: "https://github.com/khant21699/NewsApp-Next",
    year: "2023",
    role: "Build",
  },
];

export default function Projects() {
  return (
    <section
      id={Pages.Works}
      className="relative px-5 sm:px-10 py-32 sm:py-44"
    >
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-6 flex items-baseline gap-3">
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            02 / Works
          </span>
          <span className="h-px w-10 bg-[#ede5d0]/30" />
          <span className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
            Selected Projects
          </span>
        </div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-display tracking-[-0.03em] leading-[0.92] text-[clamp(2.75rem,9vw,8rem)] text-[#ede5d0] relative z-20 mb-24 max-w-[16ch]"
      >
        A few things I've shipped.
      </motion.h2>

      <div className="space-y-32 mb-32">
        {featured.map((p, i) => (
          <FeaturedProject key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-2 md:col-start-1">
          <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60 sticky top-32">
            Archive
          </div>
        </div>
        <ul className="col-span-12 md:col-span-9 md:col-start-4 divide-y divide-[#ede5d0]/15 border-y border-[#ede5d0]/15">
          {archive.map((p) => (
            <ArchiveRow key={p.title} project={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      className="grid grid-cols-12 gap-4 items-end"
    >
      <div
        className={`col-span-12 md:col-span-7 ${
          flip ? "md:col-start-6 md:order-2" : "md:col-start-1"
        }`}
      >
        <a
          href={project.liveUrl ?? "#"}
          target={project.liveUrl ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group block relative overflow-hidden bg-[#ede5d0]/5"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/3] object-cover sm:grayscale sm:group-hover:grayscale-0 transition-[filter,transform] duration-700 group-hover:scale-[1.02]"
          />
          {project.liveUrl && (
            <span className="absolute bottom-4 right-4 font-editorial text-[10px] uppercase tracking-[0.4em] text-[#0a0a0e] bg-[#ede5d0]/80 px-3 py-1.5">
              Visit ↗
            </span>
          )}
        </a>
      </div>

      <div
        className={`col-span-12 md:col-span-4 ${
          flip ? "md:col-start-2 md:order-1" : "md:col-start-9"
        } space-y-6`}
      >
        <div className="font-editorial text-[10px] uppercase tracking-[0.4em] text-[#ede5d0]/60">
          {`F/0${index + 1}`}
        </div>
        <h3 className="font-display text-3xl sm:text-4xl leading-[1.05] tracking-[-0.02em]">
          {project.title}
        </h3>
        <p className="font-body text-[#ede5d0]/75 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
          {project.techs.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
          Role / {project.role}
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveRow({ project }: { project: Project }) {
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative group"
    >
      <a
        href={project.liveUrl ?? project.githubUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-12 gap-4 items-baseline py-7"
      >
        <div className="col-span-7 sm:col-span-6">
          <div className="font-display text-2xl sm:text-3xl leading-tight tracking-[-0.02em]">
            {project.title}
          </div>
        </div>
        <div className="hidden sm:block col-span-4 font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60">
          {project.techs.join(" · ")}
        </div>
        <div className="col-span-5 sm:col-span-2 text-right font-editorial text-[10px] uppercase tracking-[0.3em] text-[#ede5d0]/60 group-hover:text-[#ede5d0] transition-colors">
          {project.liveUrl ? "Visit ↗" : project.githubUrl ? "Source ↗" : "//"}
        </div>
      </a>

      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.95 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
        className="pointer-events-none hidden md:block absolute -top-12 right-0 w-64 aspect-[4/3] overflow-hidden border border-[#ede5d0]/20 z-10 bg-[#0a0a0e]"
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>
    </li>
  );
}
