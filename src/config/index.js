const environment = process.env.VUE_APP_ENV || 'production'
const config = require('./' + environment + '.js')
module.exports = config