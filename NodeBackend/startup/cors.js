

module.exports = function(){


    var whitelist = ['http://localhost:3000', 'https://ref-react-frontend.surge.sh']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

return corsOptions;

}