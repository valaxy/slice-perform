const slicePerform = require('../lib/index')
const COUNT = 10000000


var begin = slicePerform._clock()
for (var index = 0; index < COUNT; index++);
var duration = slicePerform._clock() - begin

console.log(index, `${duration / 1000000000}s`)
