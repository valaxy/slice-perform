const slicePerform = require('../lib/index')
const COUNT = 10000000


var begin = slicePerform._clock()
for (var i = 0; i < COUNT; i++);
var duration = slicePerform._clock() - begin

console.log(`${duration / 1000000000}s`)
