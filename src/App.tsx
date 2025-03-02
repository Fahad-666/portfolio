import { Route, Routes } from "react-router-dom";
import Index from "@/pages/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Skills from "./pages/skills";

function App() {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Skills />} path="/skills" />
    </Routes>
  );
}

export default App;
