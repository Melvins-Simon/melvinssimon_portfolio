import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import Hero from "./pages/hero/Index";
import Notfound from "./pages/404/Index";
import About from "./pages/about/Index";
import Contact from "./pages/contact/Index";
import Projects from "./pages/projects/Index";
import Skills from "./pages/skills/Index";
import Experience from "./pages/experince/Index";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
