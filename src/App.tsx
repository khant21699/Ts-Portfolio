import "./App.css";
import Background from "./components/background/background";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Background />
      <main className=" w-screen h-[100dvh] overflow-y-auto">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
