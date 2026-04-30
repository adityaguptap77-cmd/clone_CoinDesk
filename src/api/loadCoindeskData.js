import { getCategorySections } from './getCategorySections'
import { getCountdownBanner } from './getCountdownBanner'
import { getExploreVideos } from './getExploreVideos'
import { getFeatured } from './getFeatured'
import { getFooterColumns } from './getFooterColumns'
import { getLatest } from './getLatest'
import { getLegalLinks } from './getLegalLinks'
import { getLowerLatest } from './getLowerLatest'
import { getMarkets } from './getMarkets'
import { getMostRead } from './getMostRead'
import { getNavMenus } from './getNavMenus'
import { getNewsLinks } from './getNewsLinks'
import { getOpinionItems } from './getOpinionItems'
import { getPriceRows } from './getPriceRows'
import { getSearchAssets } from './getSearchAssets'
import { getSearchNews } from './getSearchNews'
import { getSocialLinks } from './getSocialLinks'
import { getThumbnailStories } from './getThumbnailStories'

export async function loadCoindeskData() {
  const [
    categorySections,
    countdownBanner,
    exploreVideos,
    featured,
    footerColumns,
    latest,
    legalLinks,
    lowerLatest,
    markets,
    mostRead,
    navMenus,
    newsLinks,
    opinionItems,
    priceRows,
    searchAssets,
    searchNews,
    socialLinks,
    thumbnailStories,
  ] = await Promise.all([
    getCategorySections(),
    getCountdownBanner(),
    getExploreVideos(),
    getFeatured(),
    getFooterColumns(),
    getLatest(),
    getLegalLinks(),
    getLowerLatest(),
    getMarkets(),
    getMostRead(),
    getNavMenus(),
    getNewsLinks(),
    getOpinionItems(),
    getPriceRows(),
    getSearchAssets(),
    getSearchNews(),
    getSocialLinks(),
    getThumbnailStories(),
  ])

  return {
    categorySections,
    countdownBanner,
    exploreVideos,
    featured,
    footerColumns,
    latest,
    legalLinks,
    lowerLatest,
    markets,
    mostRead,
    navMenus,
    newsLinks,
    opinionItems,
    priceRows,
    searchAssets,
    searchNews,
    socialLinks,
    thumbnailStories,
  }
}
