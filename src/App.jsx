import { useEffect, useState } from 'react'
import './App.css'
import * as defaultCoindeskData from './api/coindeskData'
import { loadCoindeskData } from './api/loadCoindeskData'
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
import InfoPage from './pages/InfoPage'
import { getPageByPath } from './pages/pageRegistry'

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [coindeskData, setCoindeskData] = useState(defaultCoindeskData)
  const [pathname, setPathname] = useState(window.location.pathname)
  const activePage = getPageByPath(pathname)

  useEffect(() => {
    let isActive = true

    loadCoindeskData()
      .then((data) => {
        if (isActive) {
          setCoindeskData({ ...defaultCoindeskData, ...data })
        }
      })
      .catch((error) => {
        console.warn('Using bundled Snapd content because the backend could not be reached.', error)
      })

    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return (
    <div className="coindesk-page">
      <Navbar navMenus={coindeskData.navMenus} onSearchOpen={() => setIsSearchOpen(true)} />
      {isSearchOpen && (
        <SearchModal
          searchAssets={coindeskData.searchAssets}
          searchNews={coindeskData.searchNews}
          onClose={() => setIsSearchOpen(false)}
        />
      )}

      {activePage ? (
        <>
          <InfoPage page={activePage} />
          <Footer footerColumns={coindeskData.footerColumns} />
          <LegalFooter legalLinks={coindeskData.legalLinks} socialLinks={coindeskData.socialLinks} />
        </>
      ) : (
        <main>
          <CountdownBanner banner={coindeskData.countdownBanner} key={coindeskData.countdownBanner.durationSeconds} />
          <TopNewsSection
            featured={coindeskData.featured}
            latest={coindeskData.latest}
            lowerLatest={coindeskData.lowerLatest}
            markets={coindeskData.markets}
          />
          <LowerNewsSection newsLinks={coindeskData.newsLinks} thumbnailStories={coindeskData.thumbnailStories} />
          <ExploreSection exploreVideos={coindeskData.exploreVideos} priceRows={coindeskData.priceRows} />
          <PopularSection mostRead={coindeskData.mostRead} opinionItems={coindeskData.opinionItems} />
          <div className="ad-band">ADVERTISEMENT</div>
          <CategoryGridSection categorySections={coindeskData.categorySections} />
          <Footer footerColumns={coindeskData.footerColumns} />
          <LegalFooter legalLinks={coindeskData.legalLinks} socialLinks={coindeskData.socialLinks} />
        </main>
      )}
    </div>
  )
}

export default App
