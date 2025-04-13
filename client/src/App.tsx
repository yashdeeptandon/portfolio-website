import { Particles } from "./components/magicui/particles";
import { useTheme } from "./context/theme-context";
import RoutesComponent from "./routes/routes";

function App() {
  const { theme } = useTheme();
  return (
    <main className="size-full">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        color={theme === "light" ? "#000" : "#fff"}
        refresh
      />
      <RoutesComponent />
    </main>
  );
}

export default App;
