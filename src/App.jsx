import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import LoadingIntro from './components/LoadingIntro'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import WorksSection from './components/WorksSection'
import TimelineSection from './components/TimelineSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      const el = document.getElementById('home')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [loading])

  return (
    <>
      {loading && <LoadingIntro onFinish={() => setLoading(false)} />}
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}

export default App
