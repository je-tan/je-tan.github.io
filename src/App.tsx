import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TimelineSection from './components/TimelineSection'
import Skills from './components/Skills'
import Footer from './components/Footer'
import portfolio from './data/portfolio.json'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <TimelineSection
        header='Education'
        items={portfolio.education}
      />
      <TimelineSection
        header='Experience'
        items={portfolio.experience}
      />
      <TimelineSection
        header='Projects'
        items={portfolio.projects}
      />
      <Skills/>
      <Footer />
    </>
  )
}

export default App
