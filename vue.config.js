const path = require('path')
console.log('1')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
}
