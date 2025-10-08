import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from "./Components/CustomCursor";
import { Pages } from "./shared";

function App() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => setIsTopOfPage(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (page: Pages) => {
    const element = document.getElementById(page);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <NavBar
        topOfPage={isTopOfPage}
        currentPage={currentPage}
        scrollFun={scrollToSection}
      />

      <main className="relative z-10">
        <Hero setCurrentPage={setCurrentPage} />
        <About setCurrentPage={setCurrentPage} />
        <Projects setCurrentPage={setCurrentPage} />
        <Contact setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
}

export default App;
