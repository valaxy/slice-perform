import slicePerform from '../lib/index'

const COUNT = 10000000

let index = 0
slicePerform(
    90,
    10,
    () => index < COUNT,
    () => index += 1,
    (duration) => console.log(index, `${duration / 1000000000}s`)
)