const slicePerform = require('../lib/index')
const COUNT = 10000000


// slice
var index = 0
slicePerform(
	() => index < COUNT,
	() => index += 1,
	(duration) => console.log(`${duration / 1000000000}s`)
)