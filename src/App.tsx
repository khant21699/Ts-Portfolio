import "./App.css";
import Background from "./components/background/background";
import Hero from "./components/hero/hero";

function App() {
  return (
    <main className=" w-screen h-[100dvh] overflow-y-auto">
      <Background />
      <Hero />
    </main>
  );
}

export default App;
