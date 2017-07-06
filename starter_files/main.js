// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a,b) {
    if(a>b) {
    return a;
  }
  else {
    return b;
  }
    }

max(4,9);
9

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a,b,c) {
  if(a > b && a > c) {
    return a;
  } else if(b > a && b >c) {
    return b;
  } else {
    return c;
  }
}
maxOfThree(4,8,2);
8


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(y){
if(y == "a" || y == "e" || y == "i" || y == "o" || y == "u") {
  return true;
} else {
  return false;
}
}
 isVowel("a");
 true

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
function sum(x,y) {
  return x + y
}

sum (3,4);
7
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
function avg(a,b,c) {
  return (a + b + c) / 3;

}

avg(2,10,6);
6



// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(word) {
  return console.log(word.length)
}

getLength('hippo');
getLength('dog');
5
3


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a,b) {
  if (b > a) {
    return true;
  } if (a > b) {
    return false;
  }
}

greaterThan(2,3);
true


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
    return console.log("Hello, " + name + "!");
}

greet("Nyree");
Hello, Nyree

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1,word2,word3) {
  return console.log(word1 + " happy " + word2 + " had a great lunch " + word3);

}

madlib("dog","carrot","red");
dog happy carrot had a great lunch red
