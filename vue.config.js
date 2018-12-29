const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
    devServer: {
        port:8081,
        proxy: 'http://localhost:3000'
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                // Required - The path to the webpack-outputted app to prerender.
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [ '/', '/about','/chat'],
            })
        ]
      }
}
