module.exports = {
    pages: {
      index: {
        // entry for the page
        entry: 'src/main.js',
      },
    },
    //off the lint
    lintOnSave:false,
    // open proxy (way 1)
    /* devServer: {
      proxy: 'http://localhost:5000'
    } */

    //open proxy (way 2)
    devServer: {
      proxy: {
        '^/myApi': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/myApi':''},
          ws: true, // websocket
          changeOrigin: true
        },
        '^/api': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/api':''},
          ws: true, // websocket
          changeOrigin: true
        }
      }
    }
  }