
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom"
import HomePage from './MyPages/HomePage';
import AboutPage from './MyPages/AboutPage';
import ProjectPage from './MyPages/ProjectPage';
import ContactPage from './MyPages/ContactPage';
import EducatonPage from './MyPages/EducatonPage';
import SkillsPage from './MyPages/SkillsPage';


function App() {
  return (<>

    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education" element={<EducatonPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </HashRouter>

  </>
  );
}

export default App;
