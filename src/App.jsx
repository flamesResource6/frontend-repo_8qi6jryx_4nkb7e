import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl text-gray-900">DMV Demo Co.</div>
          <nav className="hidden sm:flex items-center gap-6 text-gray-700">
            <a href="#capabilities" className="hover:text-gray-900">Capabilities</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
            <a href="tel:+12025550123" className="font-semibold text-blue-700">(202) 555-0123</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="capabilities"><Capabilities /></div>
        <CTA />
        <Contact />
      </main>

      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} DMV Demo Co. All rights reserved.</p>
          <p>Serving Washington DC, Baltimore, Northern Virginia, and the Mid-Atlantic region.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
