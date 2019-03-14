exports.a = function(){
  console.log('a')
}

exports = module.exports = {a: 2}
exports.a = 1
