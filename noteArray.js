// ===== VIDEO 1: WHAT IS AN ARRAY? =====
// An array is a single variable that can store multiple values
// Instead of creating many variables, we put values together in one array

// Without array (messy way with separate variables)
const num1 = 12;
const num2 = 22;
const num3 = 42;
const num4 = 82;
const num5 = 162;
console.log(num1, num2, num3, num4, num5); // OUTPUT: 12 22 42 82 162

// With array (organized way)
const numbers = [12, 22, 42, 82, 162]; // Creates array with 5 numbers
console.log(numbers); // OUTPUT: [12, 22, 42, 82, 162] (prints entire array)

// Arrays can hold different types of data:
const friends = ['Abul', 'Tabul', 'Babul']; // Array of text strings
const passed = [true, false, true, true];   // Array of true/false values
const mixed = [12, 'Babul', true, false];   // Mixed data types in one array

console.log(friends); // OUTPUT: ['Abul', 'Tabul', 'Babul']
console.log(passed);  // OUTPUT: [true, false, true, true]
console.log(mixed);   // OUTPUT: [12, 'Babul', true, false]


// ===== VIDEO 2: ARRAY RULES =====
// Rules for creating arrays:
// 1. Use square brackets []
// 2. Separate items with commas
// 3. Strings must be in quotes (' or ")
// 4. Numbers and booleans (true/false) don't need quotes

// Good examples (correct syntax):
const numbersArray = [10, 20, 30, 40]; // Array of numbers
console.log(numbersArray); // OUTPUT: [10, 20, 30, 40]

const namesArray = ['Alice', 'Bob', 'Charlie']; // Array of strings
console.log(namesArray); // OUTPUT: ['Alice', 'Bob', 'Charlie']

const boolArray = [true, false, true]; // Array of booleans
console.log(boolArray); // OUTPUT: [true, false, true]

// Bad examples (will cause errors):
// const badArray1 = [1 2 3];       // ERROR: Missing commas between items
// const badArray2 = ['first', 'second]; // ERROR: Missing closing quote
// const badArray3 = [true false];   // ERROR: Missing comma between items


// ===== VIDEO 3: ARRAY LENGTH, INDEX, GET AND SET =====
const myArray = [1, 2, 3, 4, false]; // Create array with 5 items
console.log("Original array:", myArray); // OUTPUT: [1, 2, 3, 4, false]

// LENGTH: Number of items in array
console.log("Array length:", myArray.length); // OUTPUT: 5

// INDEX POSITIONS:
// Every item has position number starting from 0
// [1 (position 0), 2 (position 1), 3 (position 2), 4 (position 3), false (position 4)]

// GET VALUES: Access items using index in square brackets
console.log("First item:", myArray[0]); // OUTPUT: 1
console.log("Second item:", myArray[1]); // OUTPUT: 2
console.log("Last item:", myArray[4]); // OUTPUT: false

// SET VALUES: Change items using index
myArray[1] = 20;   // Change second item (index 1) to 20
console.log("After changing index 1:", myArray); // OUTPUT: [1, 20, 3, 4, false]

myArray[4] = true; // Change last item (index 4) to true
console.log("After changing last item:", myArray); // OUTPUT: [1, 20, 3, 4, true]

// Accessing invalid indexes:
console.log("Index 10:", myArray[10]); // OUTPUT: undefined (no item at position 10)
console.log("Index -1:", myArray[-1]); // OUTPUT: undefined (negative index not allowed)


// ===== VIDEO 4: ADD/REMOVE ELEMENTS =====
const items = [1, 2, 3, 4, false];
console.log("Start array:", items); // OUTPUT: [1, 2, 3, 4, false]

// PUSH: Add items to END of array
items.push(5);        // Add single item to end
console.log("After push(5):", items); // OUTPUT: [1, 2, 3, 4, false, 5]

items.push(6, 7, 8); // Add multiple items to end
console.log("After push(6,7,8):", items); // OUTPUT: [1, 2, 3, 4, false, 5, 6, 7, 8]

// POP: Remove last item from END of array
items.pop();          // Remove last item (8)
console.log("After pop():", items); // OUTPUT: [1, 2, 3, 4, false, 5, 6, 7]

// UNSHIFT: Add items to START of array
items.unshift(0);     // Add single item to beginning
console.log("After unshift(0):", items); // OUTPUT: [0, 1, 2, 3, 4, false, 5, 6, 7]

// SHIFT: Remove first item from START of array
items.shift();        // Remove first item (0)
console.log("After shift():", items); // OUTPUT: [1, 2, 3, 4, false, 5, 6, 7]


// ===== VIDEO 5: COMMON ARRAY METHODS =====
const fruits = ['apple', 'banana', 'orange'];
console.log("Fruits array:", fruits); // OUTPUT: ['apple', 'banana', 'orange']

// 1. Array.isArray(): Check if something is an array
console.log("Is fruits an array?", Array.isArray(fruits)); // OUTPUT: true
console.log("Is 'hello' an array?", Array.isArray('hello')); // OUTPUT: false

// 2. includes(): Check if array contains specific item
console.log("Has banana?", fruits.includes('banana')); // OUTPUT: true
console.log("Has grape?", fruits.includes('grape'));   // OUTPUT: false

// 3. indexOf(): Find position of item in array
console.log("Position of orange:", fruits.indexOf('orange')); // OUTPUT: 2
console.log("Position of mango:", fruits.indexOf('mango'));   // OUTPUT: -1 (not found)

// 4. concat(): Combine two arrays into new array
const vegetables = ['carrot', 'potato'];
const food = fruits.concat(vegetables); // Join fruits and vegetables
console.log("Combined food:", food); // OUTPUT: ['apple','banana','orange','carrot','potato']

// 5. join(): Create string from array items
console.log("Joined with commas:", fruits.join());    // OUTPUT: "apple,banana,orange"
console.log("Joined with arrows:", fruits.join(' → ')); // OUTPUT: "apple → banana → orange"

// 6. slice(): Copy part of array (original unchanged)
const numbers = [10, 20, 30, 40, 50];
console.log("Slice positions 1-3:", numbers.slice(1, 4)); // OUTPUT: [20, 30, 40] 
// (start at index 1, stop before index 4)

console.log("Slice from index 2:", numbers.slice(2)); // OUTPUT: [30, 40, 50] 
// (start at index 2 to end)

// 7. splice(): Add/remove items anywhere (changes original)
const months = ['Jan', 'Mar', 'Apr'];
// Add item at position 1 (remove 0 items, add 'Feb')
months.splice(1, 0, 'Feb'); 
console.log("After adding Feb:", months); // OUTPUT: ['Jan', 'Feb', 'Mar', 'Apr']

// Remove 1 item at position 2
months.splice(2, 1); 
console.log("After removing index 2:", months); // OUTPUT: ['Jan', 'Feb', 'Apr']

// PRACTICE TIME: Try these yourself!
const practiceArray = [5, 10, 15, 20];
// 1. Add 25 to the end
practiceArray.push(25);
console.log("After push(25):", practiceArray); // OUTPUT: [5, 10, 15, 20, 25]

// 2. Remove first item
practiceArray.shift();
console.log("After shift():", practiceArray); // OUTPUT: [10, 15, 20, 25]

// 3. Check if 15 exists
console.log("Has 15?", practiceArray.includes(15)); // OUTPUT: true

// 4. Join with plus signs
console.log("Joined with +:", practiceArray.join(' + ')); // OUTPUT: "10 + 15 + 20 + 25"