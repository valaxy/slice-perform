[![Dependency Status](https://david-dm.org/valaxy/slice-perform.svg?style=flat-square)](https://david-dm.org/valaxy/slice-perform)

Split executing of javascript code into slice

## Normal Javascript 

```javascript
import slicePerform, {_clock} from '../lib/index'
const COUNT = 10000000


let begin = _clock()
for (var index = 0; index < COUNT; index++);
let duration = _clock() - begin

console.log(index, `${duration / 1000000000}s`)
```

## Slice Javascript

```javascript
const slicePerform = require('slice-perform')
const COUNT = 10000000

let index = 0
slicePerform(
	90, // sliceTimeInMS
	10, // waitTimeInMS, in wait time, ui thread will not be blocked by javascript
	() => index < COUNT,  // test
	() => index += 1,     // fn
	(duration) => console.log(index, `${duration / 1000000000}s`) // callback
)
```