import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ProjectCard from "./project-card";

// Import project images (you'll need to add these to your assets folder)
// import EvoGym from "../../assets/EvoGym.png";
// import Netflix from "../../assets/Netflix.png";
// import Portfolio from "../../assets/Portfolio.png";
// import RNMovie from "../../assets/RNMovie.png";
// import News from "../../assets/NewsApp.png";
// import Food from "../../assets/FoodRecipe.png";

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const projectsData = [
    {
      title: "EvoGym",
      description:
        "Modern fitness application with advanced workout tracking and personalized training plans.",
      techs: ["React.js", "TypeScript", "Tailwind CSS"],
      imgSrc: "https://via.placeholder.com/600x400/1f2937/71a9f7?text=EvoGym",
      live: "https://evo-fitness-gym.netlify.app/",
      git: "https://github.com/khant21699/EvoGym-Ts-React",
      category: "Web App",
    },
    {
      title: "Personal Portfolio",
      description:
        "Creative portfolio website showcasing projects and skills with modern animations.",
      techs: ["React.js", "TypeScript", "Tailwind CSS"],
      imgSrc:
        "https://via.placeholder.com/600x400/1f2937/e2c044?text=Portfolio",
      live: "",
      git: "https://github.com/khant21699/Ts-Portfolio",
      category: "Portfolio",
    },
    {
      title: "Netflix Clone",
      description:
        "Full-featured streaming platform clone with movie browsing and search functionality.",
      techs: ["React.js", "Redux", "TMDB API"],
      imgSrc: "https://via.placeholder.com/600x400/1f2937/f72585?text=Netflix",
      live: "https://movie-nefflix-cline-app.netlify.app/",
      git: "https://github.com/khant21699/netflixClone",
      category: "Web App",
    },
    {
      title: "Movie Mobile App",
      description:
        "Cross-platform mobile app for discovering and tracking movies with intuitive UI.",
      techs: ["React Native", "TMDB API", "NativeWind"],
      imgSrc:
        "https://via.placeholder.com/600x400/1f2937/71a9f7?text=Mobile+App",
      live: "",
      git: "https://github.com/khant21699/ReactNative-MovieApp",
      category: "Mobile App",
    },
    {
      title: "Food Recipes App",
      description:
        "Culinary discovery platform with recipe search, filtering, and meal planning features.",
      techs: ["Next.js", "Tailwind CSS", "TheMealDB API"],
      imgSrc: "https://via.placeholder.com/600x400/1f2937/e2c044?text=Food+App",
      live: "https://food-recipes-nextjs-sux3.vercel.app/",
      git: "https://github.com/khant21699/food-recipes-nextjs",
      category: "Web App",
    },
    {
      title: "News App",
      description:
        "Real-time news aggregation platform with personalized feeds and breaking news alerts.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "MediaStack API"],
      imgSrc: "https://via.placeholder.com/600x400/1f2937/f72585?text=News+App",
      live: "https://live-news-next-app.vercel.app/",
      git: "https://github.com/khant21699/NewsApp-Next",
      category: "Web App",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen max-w-screen-lg mx-auto px-4 py-20 bg-transparent"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            #<span className="text-secondary">Projects</span>
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={gridVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
