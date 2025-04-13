import { useTheme } from "@/context/theme-context";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const currentPath = window.location.pathname;
  const navigate = useNavigate();
  return (
    <nav className="w-full h-12 flex justify-between fixed top-0 z-10 px-4 py-2 bg-background/80 backdrop-blur-md rounded-lg shadow-md">
      <div className="w-fit-content flex flex-row gap-2 items-center">
        <Button
          variant="link"
          size="default"
          className={`${currentPath === "/" ? "underline" : ""}`}
          onClick={() => navigate("/")}
        >
          About
        </Button>
        <Button
          variant="link"
          size="default"
          className={`${currentPath === "/blogs" ? "underline" : ""}`}
          onClick={() => navigate("/blogs")}
        >
          Blogs
        </Button>
        <Button
          variant="link"
          size="default"
          className={`${currentPath === "/projects" ? "underline" : ""}`}
          onClick={() => navigate("/projects")}
        >
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
