// Question 1
// Create an array named fruits that contains the following string
// elements: "apple", "banana", "mango", "orange".
let fruit7:string[]= ["apple", "bnana", "mango","orange"]
console.log(fruit7);


// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
let number:number[]=[10, 20, 30, 40, 50]
console.log(number);

// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
let thirdfruit:string=(fruit7[2])
console.log(thirdfruit);

 // Question 4
// Change the second element of the numbers array to 25.
let number1:number[]=[10 ,20 ,30 ,40]
number1[1] = 25
console.log(number1);

// Question 5
// Add the element "grape" to the end of the fruits array using the method.
let fruits6:string[]=["apple", "banana", "mango", "orange"]
fruits6.push("grape");
console.log(fruits6);

// Question 6
// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let fruits5:string[]=["apple", "banana", "mango", "orange"]
fruits5.pop();
console.log(fruits5);

// Question 7
// Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let fruits4:string[]=["apple", "banana", "mango", "orange"]
fruits4.shift();
console.log(fruits4);


// Question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.
let fruits3:string[]=["apple", "banana", "mango", "orange"]
fruits3.unshift("Kiwi");
console.log(fruits3);

// Question 9
// Remove 2 elements from the fruits array starting from index 1 using the method.
let fruits2:string[]=["apple", "banana", "mango", "orange"]
fruits2.splice(1,2);
console.log(fruits2);

// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
let fruits1:string[]=["apple", "banana", "mango", "orange"]
fruits1.splice(2,0,... ["pineapple", "pear"]);
console.log(fruits1);

// Question 11
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let fruits12:string[]=["apple", "banana", "mango", "orange"]
fruits12.slice(0,1);
let citrusfruit = fruits12
console.log(citrusfruit);

// Question 12
// Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let fruits:string[]=["apple","banana","mango", "orange"]
fruits.shift()
fruits.shift()
let lastTwoFruits = fruits
console.log(lastTwoFruits);













