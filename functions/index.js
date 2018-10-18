const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const nuxt = new Nuxt({ buildDir: 'dist', dev: false })

exports.ssr = functions.https.onRequest(nuxt.render)
