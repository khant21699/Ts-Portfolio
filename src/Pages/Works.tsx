import React from "react";
import { Pages } from "../shared";
import WorksCards from "./WorksCards";
import EvoGym from "../assets/EvoGym.png";
import Netflix from "../assets//Netflix.png";
import Portfolio from "../assets/Portfolio.png";
import RNMovie from "../assets/RNMovie.png";
import News from "../assets/NewsApp.png";
import Food from "../assets/FoodRecipe.png";

import { motion } from "framer-motion";

type Props = {
  setCurrentPage: (value: Pages) => void;
};

export default function Works({ setCurrentPage }: Props) {
  return (
    <section
      id={Pages.Works}
      className=" w-full py-[150px] text-white font-firaCode"
    >
      {/* header */}
      <div className="mb-16 flex items-center gap-10">
        <h3 className="text-[20px] text-white font-firaCode">
          <span className="text-primary">#</span>Works
        </h3>
        <div className="w-3/5 h-[1px] bg-primary"></div>
      </div>
      {/* works */}
      <motion.div
        className="w-full justify-center grid grid-cols-1 md:grid-cols-2 gap-4 "
        onViewportEnter={() => {
          setCurrentPage(Pages.Works);
        }}
      >
        <WorksCards
          techs={["React.js", "Typescript", "TailwindCss"]}
          title="EvoGym"
          imgSrc={EvoGym}
          live="https://evo-fitness-gym.netlify.app/"
          git="https://github.com/khant21699/EvoGym-Ts-React"
        />
        <WorksCards
          techs={["React.js", "Typescript", "TailwindCss"]}
          title="Personal Portfilio"
          imgSrc={Portfolio}
          live=""
          git="https://github.com/khant21699/Ts-Portfolio"
        />
        <WorksCards
          techs={["React.js", "Redux", "TMDB API"]}
          title="Netflix Clone"
          live="https://movie-nefflix-cline-app.netlify.app/"
          imgSrc={Netflix}
          git="https://github.com/khant21699/netflixClone"
        />
        <WorksCards
          techs={["React Native", "TMDB API", "Nativewind"]}
          title="Movie Mobile App"
          imgSrc={RNMovie}
          git="https://github.com/khant21699/ReactNative-MovieApp"
          live=""
        />
        <WorksCards
          techs={["Next.js", "Tailwind CSS", "themealdb.com API"]}
          title="NextJs Food Recipes App"
          live="https://food-recipes-nextjs-sux3.vercel.app/"
          imgSrc={Food}
          git="https://github.com/khant21699/food-recipes-nextjs"
        />
        <WorksCards
          techs={["Next.js", "Typescript", "Tailwind CSS", "MediaStack API"]}
          title="NextJs News App"
          live="https://live-news-next-app.vercel.app/"
          imgSrc={News}
          git="https://github.com/khant21699/NewsApp-Next"
        />
      </motion.div>
    </section>
  );
}
