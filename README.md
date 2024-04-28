# 100-Days-of-JavaScript-Coding-Challenges-


## replace()
The replace() method in JavaScript is used to search a string for a specified substring or regular expression pattern and replace it with a new substring. It doesn't change the original string but returns a new string with the replacements made. Here's the basic syntax:

```js
string.replace(searchValue, replaceValue)
```


```js
let originalString = "Hello, world!";
let newString = originalString.replace("world", "universe");

console.log(newString); // Output: "Hello, universe!"
```


## reduce()
In JavaScript, the reduce() method is used to reduce an array into a single value, applying a specified function to each element of the array. This function takes four arguments: accumulator, currentValue, currentIndex, and the array itself. The accumulator is the result of the previous iteration, or the initial value if provided.
