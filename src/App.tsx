import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./Pages/HomePage";
import { Pages } from "./shared";
import AboutMe from "./Pages/AboutMe";
import Works from "./Pages/Works";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ParticleBackground from "./Components/ParticleBackground";

function App() {
  const [topOfPage, setTopofPage] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.Home);

  const handleScroll = () => {
    if (window.scrollY < 100) {
      setTopofPage(true);
    } else if (window.scrollY >= 100) {
      setTopofPage(false);
    }
  };

  const scrollFun = (page: Pages) => {
    const scrollPage = document.getElementById(page);
    if (scrollPage !== null) {
      scrollPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="App w-full px-[10%] overflow-x-hidden relative">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <NavBar
          topOfPage={topOfPage}
          currentPage={currentPage}
          scrollFun={scrollFun}
        />
        {/* HomePage */}
        <div className="relative z-10">
          <HomePage setCurrentPage={setCurrentPage} />
          <AboutMe setCurrentPage={setCurrentPage} />
          <Works setCurrentPage={setCurrentPage} />
          <Contact setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
