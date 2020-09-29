// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  env: {
    onsignalKey: process.env.ONESIGNAL,
    onesignalSafariKey: process.env.ONESIGNALSAFARI,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}
