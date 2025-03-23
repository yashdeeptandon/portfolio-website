import { AboutMe } from "./components/about-me/about-me";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <main className="size-full bg-background p-2 text-primary">
      <Navbar />
      <AboutMe />
    </main>
  );
}

export default App;
