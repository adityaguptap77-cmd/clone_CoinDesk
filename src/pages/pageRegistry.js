const pageSummaries = {
  'About Us': 'Learn about Snapd, our newsroom mission, and the people building market intelligence for digital assets.',
  Masthead: 'Meet the editors, reporters, producers, and researchers behind Snapd coverage.',
  Careers: 'Explore open roles across editorial, data, product, events, and operations.',
  Blog: 'Read product notes, company updates, newsroom announcements, and behind-the-scenes dispatches.',
  'Investor Relations': 'Find company information, financial updates, governance resources, and investor contacts.',
  'Contact Us': 'Reach the Snapd team for editorial, support, partnership, and business questions.',
  Accessibility: 'Review accessibility commitments and ways to report barriers across Snapd products.',
  Advertise: 'Build campaigns across Snapd editorial, events, video, newsletters, and market data surfaces.',
  'Media Kit': 'Access audience information, brand assets, specifications, and media opportunities.',
  Sitemap: 'Browse the major destinations across Snapd in one organized index.',
  'System status': 'Check availability updates for Snapd products, data feeds, and publishing systems.',
  Markets: 'Track crypto market moves, asset prices, liquidity, volatility, and trading analysis.',
  Finance: 'Follow digital asset finance, funding, ETFs, treasuries, institutions, and market structure.',
  Tech: 'Read protocol, infrastructure, security, and developer ecosystem coverage.',
  Policy: 'Follow regulation, legislation, enforcement, agencies, and global crypto policy debates.',
  Focus: 'Deep reporting and explainers on the biggest themes shaping digital assets.',
  'Snapd Daily': 'Daily video coverage of market moves, policy shifts, and the stories traders are watching.',
  "Editor's Picks": 'A curated collection of notable Snapd videos and interviews.',
  Shorts: 'Fast video updates for breaking stories, market moments, and quick explainers.',
  Spotlight: 'Longer-form conversations with founders, policymakers, investors, and analysts.',
  'Snapd Podcast Network': 'Listen to Snapd podcasts covering markets, culture, policy, and crypto builders.',
  'Markets Outlook': 'Audio analysis on asset trends, macro drivers, and trading conditions.',
  'Gen C': 'Stories about crypto culture, communities, creators, and consumer adoption.',
  Prices: 'Explore live digital asset prices, performance, and market context.',
  'Bitcoin (BTC)': 'Bitcoin news, prices, market analysis, mining updates, and institutional adoption.',
  'Ethereum (ETH)': 'Ethereum news, protocol upgrades, staking, layer 2 activity, and ecosystem analysis.',
  XRP: 'XRP market updates, network developments, and regulatory coverage.',
  'Solana (SOL)': 'Solana ecosystem news, price analysis, network activity, and builder updates.',
  'Market Data': 'Institutional digital asset data for analytics, research, and market monitoring.',
  'Index Offering': 'Digital asset index products, benchmark methodologies, and partner information.',
  API: 'Programmatic market data access for prices, exchanges, indices, and institutional workflows.',
  'Research Insights': 'Data-driven reports and analysis on digital asset trends.',
  'Documentation and Governance': 'Methodology documents, policies, announcements, and governance resources.',
  'Consensus Miami': 'Event information, speakers, programming, and registration for Consensus Miami.',
  'Consensus 2026': 'The flagship Snapd event for crypto, finance, policy, and technology leaders.',
  'Snapd: Policy & Regulation': 'Event programming focused on digital asset policy and regulatory strategy.',
  Webinars: 'Upcoming and on-demand Snapd webinars for market, policy, and technology topics.',
  'Bitcoin Treasuries Theme Week': 'Sponsored coverage and insights on corporate bitcoin treasury strategy.',
  'Thought Leadership': 'Partner perspectives, sponsored insights, and executive viewpoints.',
  'Press Release': 'Company announcements and sponsored news releases.',
  MEXC: 'Sponsored market education, exchange updates, and partner content from MEXC.',
  Phemex: 'Sponsored trading insights, product updates, and partner content from Phemex.',
  Stellar: 'Sponsored ecosystem insights, payments coverage, and partner content from Stellar.',
  'Research Hub': 'Reports, charts, and market research from Snapd analysts.',
  'Exchange Benchmark': 'Exchange quality research, benchmark information, and methodology context.',
  Ethics: 'Snapd editorial ethics, newsroom standards, and disclosure practices.',
  Privacy: 'How Snapd handles privacy, data, cookies, and user choices.',
  'Terms of Use': 'The terms that govern use of Snapd websites, products, and services.',
  'Cookie Settings': 'Manage cookie preferences and learn how Snapd uses tracking technologies.',
  'Do Not Sell My Info': 'Privacy rights and opt-out information for eligible users.',
  'Bug Bounty Program': 'Security reporting guidance and responsible disclosure information.',
  News: 'Latest digital asset news across markets, finance, technology, policy, and culture.',
  Video: 'Watch Snapd shows, interviews, explainers, and market updates.',
  Research: 'Independent research, data analysis, reports, and institutional insights.',
  Sponsored: 'Partner content, sponsored features, press releases, and market education.',
  'Snapd Headlines': 'A daily newsletter with the most important crypto stories and market context.',
  'Crypto Daybook Americas': 'Morning market setup for the Americas trading day.',
  'The Protocol': 'A newsletter covering blockchain technology, upgrades, and developer ecosystems.',
  'State of Crypto': 'Policy and regulation updates from the digital asset industry.',
  'Crypto for Advisors': 'Digital asset education and market context for financial advisors.',
  'Crypto Long & Short': 'Weekly market structure, trading, and investment analysis.',
  'Bitcoin News': 'News and analysis focused on Bitcoin markets, mining, policy, and adoption.',
  'Ethereum News': 'Ethereum ecosystem news, upgrades, staking, and layer 2 developments.',
  'XRP News': 'Coverage of XRP markets, legal developments, and network activity.',
  'Solana News': 'Solana ecosystem updates, price moves, apps, and protocol news.',
  'Public Keys at NYSE': 'Video conversations and market interviews from Public Keys at NYSE.',
  'Snapd Spotlight': 'Featured video interviews and documentary-style market stories.',
  'Blockspace Media': 'Video coverage from builders, protocols, and on-chain infrastructure teams.',
  'See all news articles': 'Browse all Snapd news articles by topic and recency.',
  'See all newsletters': 'Browse all Snapd newsletters and sign up for the ones you want.',
  'See all videos': 'Browse the full Snapd video library.',
  'See all podcasts': 'Browse Snapd podcast shows and episodes.',
}

const defaultSummary = 'Coverage, resources, and updates from Snapd.'

export function pagePath(label) {
  return `/${label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`
}

export function getPageByPath(pathname) {
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '')

  return allPages.find((page) => page.path === normalizedPath)
}

export const allPages = Object.keys(pageSummaries).map((title) => ({
  title,
  path: pagePath(title),
  summary: pageSummaries[title] ?? defaultSummary,
}))

export function makePageLink(label) {
  return pagePath(label)
}
