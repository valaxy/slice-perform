const slicePerform = require('../lib/index')
const COUNT = 10000000

var index = 0
slicePerform(
	90,
	10,
	() => index < COUNT,
	() => index += 1,
	(duration) => console.log(index, `${duration / 1000000000}s`)
)