const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    durationSeconds: { type: Number, required: true },
    ctaLabel: { type: String, required: true },
    ctaHref: { type: String, required: true },
  },
  { _id: false },
)

const latestStorySchema = new mongoose.Schema(
  {
    time: { type: String, required: true },
    tone: String,
    tag: String,
    title: { type: String, required: true },
    excerpt: String,
  },
  { _id: false },
)

const featuredStorySchema = new mongoose.Schema(
  {
    kicker: { type: String, required: true },
    title: { type: String, required: true },
    meta: String,
  },
  { _id: false },
)

const mostReadStorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: String,
    date: { type: String, required: true },
  },
  { _id: false },
)

const categorySectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    art: { type: String, required: true },
    lead: { type: String, required: true },
    time: { type: String, required: true },
    links: [{ type: String, required: true }],
  },
  { _id: false },
)

const dataMenuItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false },
)

const navColumnSchema = new mongoose.Schema(
  {
    heading: { type: String, required: true },
    links: [{ type: String, required: true }],
    action: String,
  },
  { _id: false },
)

const eventCardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
  },
  { _id: false },
)

const navMenuSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    columns: [navColumnSchema],
    eventCards: [eventCardSchema],
    dataItems: [dataMenuItemSchema],
  },
  { _id: false },
)

const snapdContentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, default: 'homepage' },
    countdownBanner: { type: bannerSchema, required: true },
    markets: { type: [[String]], default: [] },
    latest: { type: [latestStorySchema], default: [] },
    featured: { type: [featuredStorySchema], default: [] },
    lowerLatest: { type: [latestStorySchema], default: [] },
    newsLinks: { type: [[String]], default: [] },
    thumbnailStories: { type: [[String]], default: [] },
    priceRows: { type: [[String]], default: [] },
    exploreVideos: { type: [[String]], default: [] },
    opinionItems: { type: [[String]], default: [] },
    mostRead: { type: [mostReadStorySchema], default: [] },
    categorySections: { type: [categorySectionSchema], default: [] },
    footerColumns: { type: mongoose.Schema.Types.Mixed, default: [] },
    legalLinks: [{ type: String }],
    socialLinks: [{ type: String }],
    searchAssets: { type: [[String]], default: [] },
    searchNews: { type: [[String]], default: [] },
    dataMenuItems: { type: [dataMenuItemSchema], default: [] },
    navMenus: {
      type: Map,
      of: navMenuSchema,
      default: {},
    },
  },
  { timestamps: true },
)

snapdContentSchema.set('toJSON', {
  transform(_document, returnedObject) {
    delete returnedObject._id
    delete returnedObject.__v
    return returnedObject
  },
})

module.exports = mongoose.model('SnapdContent', snapdContentSchema)
