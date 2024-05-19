# 100-Days-of-JavaScript-Coding-Challenges-

## JavaScript Methods Explained:

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



## replace()
In JavaScript, the replace() method is used to find a specified value within a string and replace it with another value. Here's a simple example:

```js
let sentence = "I like bananas";
let newSentence = sentence.replace("bananas", "apples");
console.log(newSentence); // Output: "I like apples"
```

In this example, replace() searches for the word "bananas" in the sentence variable and replaces it with "apples", creating a new string stored in newSentence.




This expression / \W /g used with replace() in JavaScript is a regular expression. Let's break it down:

\W: This is a regular expression pattern that matches any non-word character. Word characters include letters, digits, and underscores, so \W matches anything that is not a letter, digit, or underscore.
g: This is a flag that stands for "global." It indicates that the replacement should be done globally throughout the entire string, not just on the first match.
So, when you use replace(/\W/g, ""), it means you're replacing all non-word characters in a string with an empty string (i.e., removing them).

Here's an example:
```js
let sentence = "Hello, world!";
let newSentence = sentence.replace(/\W/g, "");
console.log(newSentence); // Output: "Helloworld"
```

In this example, all non-word characters (, and !) are removed from the sentence, resulting in "Helloworld".


## Understanding JavaScript's Set: A Simple Guide to Unique Collections

In simple terms, a Set in JavaScript is a special type of object that lets you store a collection of unique items. This means no item can appear more than once in the collection. You can add different kinds of values, like numbers, strings, or even objects, and the Set will make sure each value is stored only once.

Basic Features of Set
Unique Values: Every item in a Set is unique. If you try to add a duplicate, it won't be added again.
Order of Insertion: Items are kept in the order you add them.


How to Use a Set

const mySet = new Set();
```js
mySet.add(1);      // Add the number 1
mySet.add(5);      // Add the number 5
mySet.add(1);      // Try to add 1 again (won't be added because it's a duplicate)

console.log(mySet.has(1)); // Check if 1 is in the set (true)
console.log(mySet.size);   // Get the number of items in the set (2)

mySet.delete(5);   // Remove the number 5 from the set

console.log(mySet); // Show the set (contains only 1)
```

Key Methods
add(value): Adds a new item to the Set.
delete(value): Removes an item from the Set.
has(value): Checks if an item exists in the Set.
clear(): Removes all items from the Set.
size: Tells you how many items are in the Set.

Iterating Over a Set

```js
for (let item of mySet) {
  console.log(item); // Will print each item in the set
}
```

