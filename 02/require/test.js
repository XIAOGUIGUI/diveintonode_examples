var ajs = require('./a');
var localA = ajs.getA()
console.log(localA)
localA.data = 3
console.log(ajs.a.data)
