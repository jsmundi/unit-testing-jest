# Javascript Algorithms 
## Jest Unit Testing

### Array Helper
 In this exercise we augmented the built-in `Array` methods with some useful ones of our own.

#### Sum
Sums all the elements in the array and returns the total.Throw an error if an element isn't a Number.

#### Remove
Complete the remove function, which takes an array (`arr`) and returns a new `array` which contains the elements of `arr` with `item` removed.
 * If `arr` contains more than one copy of `item`, remove both.
 * If `arr` doesn't contain `item`, return a copy of `arr`.
 
#### Find Duplicates 
returns all values in an array which occur
more than once. For example, if `arr` is `[1, 1, 'a', 'b', 'c', 'a']`, then `findDuplicates(arr)` will return `[1, 'a']`
 
---

### Higher Order Functions 
Practice with JavaScript functions by implementing some variants of the higher-order functions.

#### Map
Map takes in two arguments - an array to perform the mapping on, and the mapping function. It applies the mapping function to all elements in the array and returns an array of results.

#### Filter 
 Filter takes in two arguments - an array to filter, and a filtering function. It returns a list of all elements of the array such that `filterFunction(element) === true`.
 
 #### Reduce 
 Reduce takes in three arguments - an array to reduce, a reduction function, and a seed value. For every element in the array, the reduction function is applied to the _current_ aggregate value and the element to obtain the _new_ aggregate value. The seed value is thus the _first_ aggregate value, and the result of reduce is the _final_ aggregate value obtained after processing the last element.
 
 #### Reduce Right
 reduceRight is exactly like reduce,except that instead of processing the elements in order (left-to-right), it processes them in reverse order (right-to-left).
 
 ### Stringify Objects
 For our final exercise, we're going to write a handy function that turns an input value into a string. Specifically, this function will take a 'plain object' - one that has no function properties - and turns it into a string like the one you'd see if you used console.log(). There is a built-in way to do this in JavaScript; namely, JSON.stringify. 
 1. **NUMBERS** and **BOOLEANS** are turned into strings directly (e.g. 2.5 -> 2.5, true -> true).
 
 2. **STRINGS**, as values, should have _single_ quotes around them. Don't worry about escaping characters like \n, \r, ', et cetera.
 
 3. An **ARRAY** should be stringified as a left square bracket ('['), followed by its stringified values separated by commas, followed by a right square bracket (']'). There should be a space following every comma, and there should be no comma following the final value.
 
 4. An **OBJECT** should be stringified as a left curly brace ('{'), followed by each of its key value pairs, followed by a right curly brace ('}'). A key-value pair should be stringified as the key (with no surrounding quotes), then a colon and a space, and then the stringified value. As with arrays, the key-value pairs should be separated by commas; there should be a space following every comma, and there should be no comma and space following the final value.
 
 5. **NULL** should be stringified as null, and **UNDEFINED** should be stringified as undefined (no quotes around either).
 
 6. If you ever encounter a **function** (as the original input value, as an array element, or as an object property), then you should throw a new Error('Illegal argument').

---
 
### Installation

This project requires [Node.js](https://nodejs.org/) v10.16.3+ and [Jest](https://jestjs.io/) v24.9.0+ to run. 

```bash
$ cd <project>
$ npm install -d
$ npm test
```

