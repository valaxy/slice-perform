Split executing of javascript code into slice

## Normal Javascript 

```javascript
const slicePerform = require('slice-perform')
const COUNT = 10000000

var begin = slicePerform._clock()
for (var index = 0; index < COUNT; index++);
var duration = slicePerform._clock() - begin

console.log(index, `${duration / 1000000000}s`)
```

## Slice Javascript

```javascript
const slicePerform = require('slice-perform')
const COUNT = 10000000

var index = 0
slicePerform(
	90, // sliceTimeInMS
	10, // waitTimeInMS, in wait time, javascript will not block ui thread
	() => index < COUNT,  // test
	() => index += 1,     // fn
	(duration) => console.log(index, `${duration / 1000000000}s`) // callback
)
```