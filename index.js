
var pull = require('pull-stream')

module.exports = function (prob) {
  
  return pull.map(function (data) {

    if(Number.isInteger(prob) && --prob===0 || Math.random() < prob) {
      var rbit = 1<<(8*Math.random())
      var i = ~~(Math.random()*data.length)
      data[i] = data[i]^rbit
    }

    return data

  })
}
