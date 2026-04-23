import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SearchModal from './components/SearchModal'
import CategoryGridSection from './components/sections/CategoryGridSection'
import CountdownBanner from './components/sections/CountdownBanner'
import ExploreSection from './components/sections/ExploreSection'
import Footer from './components/sections/Footer'
import LegalFooter from './components/sections/LegalFooter'
import LowerNewsSection from './components/sections/LowerNewsSection'
import PopularSection from './components/sections/PopularSection'
import TopNewsSection from './components/sections/TopNewsSection'

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="coindesk-page">
      <Navbar onSearchOpen={() => setIsSearchOpen(true)} />
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}

      <main>
        <CountdownBanner />
        <TopNewsSection />
        <LowerNewsSection />
        <ExploreSection />
        <PopularSection />
        <div className="ad-band">ADVERTISEMENT</div>
        <CategoryGridSection />
        <Footer />
        <LegalFooter />
      </main>
    </div>
  )
}

export default App
