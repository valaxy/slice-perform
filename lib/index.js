"use strict"

const async = require('async')

const UNIT_TIME = 100000000  // 100ms


var nodeClock = function () {
	let time = process.hrtime()
	return time[0] * 1000000000 + time[1] // ns
}

var browserClock = function () {
	return performance.now() * 1000000
}


if (typeof window == 'object') {
	var clock = browserClock
} else {
	clock = nodeClock
}


var slicePerform = function (test, fn, callback) {
	let allStartTime = clock()
	let goon = true
	async.whilst(
		() => goon,
		(next) => {
			let sliceStartTime = clock()
			while (true) {
				if (!test()) {
					goon = false
					break
				}
				fn()
				let duration = clock() - sliceStartTime
				if (duration >= UNIT_TIME) break
			}
			setTimeout(next, 10)
		},
		() => {
			callback(clock() - allStartTime)
		}
	)
}

slicePerform._clock = clock

module.exports = slicePerform