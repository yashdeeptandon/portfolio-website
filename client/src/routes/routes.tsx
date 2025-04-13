import Blogs from "@/components/blogs/blogs";
import Projects from "@/components/projects/projects";
import { BrowserRouter, Route, Routes } from "react-router";
import PublicRoutes from "./public-routes";
import { AboutMe } from "@/components/about-me/about-me";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes>
              <AboutMe />
            </PublicRoutes>
          }
        />
        <Route
          path="blogs"
          element={
            <PublicRoutes>
              <Blogs />
            </PublicRoutes>
          }
        />
        <Route
          path="projects"
          element={
            <PublicRoutes>
              <Projects />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
