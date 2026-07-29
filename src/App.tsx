import { ContactModalProvider } from './context/ContactModalContext';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <ContactModalProvider>
      <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
      <ContactModal />
    </ContactModalProvider>
  );
}

export default App;
