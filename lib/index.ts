const async = require('async')

var nodeClock = function () {
    let time = process.hrtime()
    return time[0] * 1000000000 + time[1] // ns
}

var browserClock = function () {
    return performance.now() * 1000000 // ns
}


if (typeof window == 'object') {
    var clock = browserClock
} else {
    clock = nodeClock
}


var slicePerform = function (sliceTimeInMS, waiTimeInMS, test, fn, callback) {
    let allStartTime  = clock()
    let goon          = true
    let sliceTimeInNS = sliceTimeInMS * 1000000
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
                if (duration >= sliceTimeInNS) break
            }
            setTimeout(next, waiTimeInMS)
        },
        () => {
            callback(clock() - allStartTime)
        }
    )
}

slicePerform._clock = clock

export = slicePerform