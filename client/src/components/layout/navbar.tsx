import { useTheme } from "@/context/theme-context";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="w-full h-12 flex justify-between">
      <div className="w-fit-content flex flex-row gap-2">
        <Button variant="link" size="default">
          About
        </Button>
        <Button variant="link" size="default">
          Blogs
        </Button>
        <Button variant="link" size="default">
          Projects
        </Button>
      </div>
      <Button
        onClick={toggleTheme}
        className="rounded-full"
        variant="default"
        size="icon"
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </Button>
    </nav>
  );
};

export default Navbar;
