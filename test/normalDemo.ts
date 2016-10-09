import slicePerform, {_clock} from '../lib/index'
const COUNT = 10000000


let begin = _clock()
for (var index = 0; index < COUNT; index++);
let duration = _clock() - begin

console.log(index, `${duration / 1000000000}s`)
