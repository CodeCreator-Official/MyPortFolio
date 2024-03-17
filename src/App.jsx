import About from "./components/About"
import Certifications from "./components/Certifications"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="bg-gray-200 dark:bg-black dark:text-gray-300 w-full h-full font-Roboto">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
    </div>
  )
}

export default App