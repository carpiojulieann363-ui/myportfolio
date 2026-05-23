import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorksSection from './components/WorksSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </>
  )
}

export default App
