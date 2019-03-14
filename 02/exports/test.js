let foo = require('./foo')
let foo1 = require('./foo1')
let foo2 = require('./foo2')
let foo3 = require('./foo3')
console.log(foo.a)
console.log(foo1.a)
console.log(foo2.a)

console.log(foo3) //{ [Function: View] test1: [Function] }
console.log(foo3.test) //undefined
console.log(foo3.test1) //[Function]
foo3.test1() //test1
