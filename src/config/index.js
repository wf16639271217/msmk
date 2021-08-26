const environment = process.env.VUE_APP_ENV || 'production'
const config = require("./env." + environment)
module.exports = config