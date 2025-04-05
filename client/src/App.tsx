import { AboutMe } from "./components/about-me/about-me";
import Navbar from "./components/layout/navbar";
import { Particles } from "./components/magicui/particles";
import { useTheme } from "./context/theme-context";

function App() {
  const { theme } = useTheme();
  return (
    <main className="size-full bg-background p-2 text-primary overflow-auto scroll-smooth flex flex-col gap-2">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={theme === "light" ? "#000" : "#fff"}
        refresh
      />
      <Navbar />
      <AboutMe />
    </main>
  );
}

export default App;
