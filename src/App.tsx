import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index/index";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Services from "./pages/Services/services";

function App() {
  return (
    <Routes>
      <Route element={<Index />} path="/" />
      <Route element={<Projects />} path="/projects" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<Services />} path="/services" />
    </Routes>
  );
}

export default App;
