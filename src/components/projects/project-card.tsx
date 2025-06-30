import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

type Props = {
  title: string;
  description: string;
  techs: Array<string>;
  imgSrc?: string;
  live?: string;
  git?: string;
  category: string;
  index: number;
};

const ProjectCard = ({
  title,
  description,
  techs,
  imgSrc,
  live,
  git,
  category,
  index,
}: Props) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const overlayVariants: Variants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const openLinkInNewTab = (type: string) => {
    try {
      if (type === "git" && git) {
        window.open(git, "_blank");
      } else if (type === "live" && live) {
        window.open(live, "_blank");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12, rotateY: 2 }}
      className="group relative perspective-1000"
    >
      {/* Main Card Container */}
      <div className="relative h-[480px] bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40 backdrop-blur-xl border border-secondary/20 rounded-2xl overflow-hidden transform-gpu">
        {/* Animated Border Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-accent/20 to-tertiary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-30">
          <span className="px-3 py-1 text-xs font-mono bg-secondary/20 text-secondary border border-secondary/30 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Project Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            variants={imageVariants}
            src={imgSrc}
            className="w-full h-full object-cover"
            alt={title}
            loading="lazy"
          />

          {/* Image Overlay */}
          <motion.div
            variants={overlayVariants}
            initial={{ opacity: 0 }}
            whileHover="hover"
            className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"
          />

          {/* Floating Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 flex flex-col gap-2"
          >
            {live && (
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => openLinkInNewTab("live")}
                className="w-10 h-10 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors"
              >
                <HiOutlineExternalLink size={18} />
              </motion.button>
            )}
            {git && (
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => openLinkInNewTab("git")}
                className="w-10 h-10 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-colors"
              >
                <HiOutlineCode size={18} />
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 relative z-20">
          {/* Project Title */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techs.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-mono bg-white/5 text-white/80 border border-white/10 rounded-lg hover:border-secondary/30 hover:text-secondary transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-xs text-white/50 font-mono">
                STATUS: DEPLOYED
              </span>
            </div>

            <div className="flex gap-2">
              {live && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openLinkInNewTab("live")}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-primary transition-all"
                >
                  <CgMediaLive size={14} />
                  Live
                </motion.button>
              )}
              {git && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openLinkInNewTab("git")}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 rounded-lg hover:bg-secondary hover:text-primary transition-all"
                >
                  <AiFillGithub size={14} />
                  Code
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"></div>
      </div>

      {/* Shadow/Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-accent/5 to-tertiary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </motion.div>
  );
};

export default ProjectCard;
