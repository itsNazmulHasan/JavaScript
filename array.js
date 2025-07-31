// Video 1: What is an array?

// const num1 = 12;
// const num2 = 22;
// const num3 = 42;
// const num4 = 82;
// const num5 = 162;


// Video 2:  Another rules of writing arrays. 

// const numbers = [12, 22, 42, 82, 162];
// const friends = ['Abul', 'Tabul' , 'Babul', 'Kabul', 'Habul'];
// const passed = [ true, false, true, true, true];
// const mixedArray = [ 12, 'Babul', 'Kabul', true, false];

// Video 3 [Array length, Index, Get and Set by index]


const numbers = [1, 2, 3, 4, false];
console.log(numbers)


// Video 4: Add/ Remove elements from array using push, pop, shift & unshift


const numbers = [1, 2, 3, 4, false];
console.log(numbers)

numbers.push(23, 22, 14);
console.log(numbers)

    // Video 5: Basic array methods and isArray, includes, indexOf, join, concat, slice, splice, 

    // Video 1: What is an array?

    // const num1 = 12;
    // const num2 = 22;
    // const num3 = 42;
    // const num4 = 82;
    // const num5 = 162;

    // Video 1: What is an array?

    // const num1 = 12;
    // const num2 = 22;
    // const num3 = 42;
    // const num4 = 82;
    // const num5 = 162;

    ->

    // Video 1: What is an array?

    console.log('=== Video 1: What is an Array? ===');

// An array is a special type of object that stores multiple values in a single variable
// It allows you to store a collection of data under one name

// Problem: Without arrays, we need separate variables for each value
const num1 = 12;
const num2 = 22;
const num3 = 42;
const num4 = 82;
const num5 = 162;

console.log('Without arrays - individual variables:');
console.log('num1:', num1);
console.log('num2:', num2);
console.log('num3:', num3);
console.log('num4:', num4);
console.log('num5:', num5);

// Solution: Using arrays to store multiple values in one variable
const numbers = [12, 22, 42, 82, 162];
console.log('\nWith arrays - all values in one variable:');
console.log('numbers:', numbers);

// Key characteristics of arrays:
// 1. Ordered collection - elements have a specific position (index)
// 2. Zero-based indexing - first element is at index 0
// 3. Can store different data types in the same array
// 4. Dynamic size - can add or remove elements

console.log('\n=== Array Characteristics ===');

// Zero-based indexing
console.log('First element (index 0):', numbers[0]); // 12
console.log('Second element (index 1):', numbers[1]); // 22
console.log('Third element (index 2):', numbers[2]); // 42

// Mixed data types in arrays
const mixedArray = [12, 'Hello', true, null, undefined, { name: 'John' }];
console.log('\nMixed data types array:', mixedArray);

// Array length
console.log('Length of numbers array:', numbers.length); // 5
console.log('Length of mixed array:', mixedArray.length); // 6

// Empty array
const emptyArray = [];
console.log('Empty array:', emptyArray);
console.log('Empty array length:', emptyArray.length); // 0

// Array with single element
const singleElement = [42];
console.log('Single element array:', singleElement);

// Nested arrays (arrays within arrays)
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Nested array:', nestedArray);
console.log('First nested array:', nestedArray[0]); // [1, 2, 3]
console.log('Second element of first nested array:', nestedArray[0][1]); // 2


// Video 2:  Another rules of writing arrays. 

// const numbers = [12, 22, 42, 82, 162];
// const friends = ['Abul', 'Tabul' , 'Babul', 'Kabul', 'Habul'];
// const passed = [ true, false, true, true, true];
// const mixedArray = [ 12, 'Babul', 'Kabul', true, false];

// Video 2:  Another rules of writing arrays. 

// const numbers = [12, 22, 42, 82, 162];
// const friends = ['Abul', 'Tabul' , 'Babul', 'Kabul', 'Habul'];
// const passed = [ true, false, true, true, true];
// const mixedArray = [ 12, 'Babul', 'Kabul', true, false];

->

    // Video 2: Rules of writing arrays

    console.log('\n=== Video 2: Rules of Writing Arrays ===');

// Rule 1: Array elements are separated by commas
const numbers = [12, 22, 42, 82, 162];
console.log('Numbers array:', numbers);

// Rule 2: Arrays can contain different data types
const friends = ['Abul', 'Tabul', 'Babul', 'Kabul', 'Habul'];
const passed = [true, false, true, true, true];
const mixedArray = [12, 'Babul', 'Kabul', true, false];

console.log('Friends array:', friends);
console.log('Passed array:', passed);
console.log('Mixed array:', mixedArray);

// Rule 3: String elements should be in quotes
const names = ['John', 'Jane', 'Bob', 'Alice'];
console.log('Names with quotes:', names);

// Rule 4: Numbers don't need quotes
const scores = [85, 92, 78, 95, 88];
console.log('Scores without quotes:', scores);

// Rule 5: Boolean values (true/false) don't need quotes
const results = [true, false, true, true, false];
console.log('Boolean results:', results);

// Rule 6: Arrays can be empty
const emptyArray = [];
console.log('Empty array:', emptyArray);

// Rule 7: Arrays can have single elements
const singleElement = [42];
console.log('Single element array:', singleElement);

// Rule 8: Arrays can contain nested arrays
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Nested array:', nestedArray);

// Rule 9: Arrays can contain objects
const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
];
console.log('Array with objects:', people);

// Rule 10: Arrays can contain functions
const functions = [
    function () { return 'Hello'; },
    function () { return 'World'; }
];
console.log('Array with functions:', functions);

// Rule 11: Arrays can contain null and undefined
const specialValues = [null, undefined, '', 0, false];
console.log('Array with special values:', specialValues);

// Rule 12: Array constructor syntax (alternative way)
const arrayConstructor = new Array(1, 2, 3, 4, 5);
console.log('Array constructor:', arrayConstructor);

// Rule 13: Array with specific length (creates empty slots)
const fixedLength = new Array(5);
console.log('Fixed length array:', fixedLength);
console.log('Fixed length array length:', fixedLength.length);

// Rule 14: Array spread operator
const original = [1, 2, 3];
const spread = [...original, 4, 5];
console.log('Original array:', original);
console.log('Spread array:', spread);

// Rule 15: Array destructuring
const [first, second, third] = [10, 20, 30];
console.log('Destructured values:', first, second, third);

// Common mistakes to avoid:
console.log('\n=== Common Mistakes to Avoid ===');

// Mistake 1: Missing commas
// const wrong = [1 2 3]; // This will cause an error

// Mistake 2: Unclosed brackets
// const wrong2 = [1, 2, 3; // This will cause an error

// Mistake 3: Using wrong quotes
// const wrong3 = ['John', "Jane', 'Bob']; // Mixed quotes can cause issues

// Mistake 4: Forgetting to close the array
// const wrong4 = [1, 2, 3; // Missing closing bracket

// Best practices:
console.log('\n=== Best Practices ===');

// 1. Use consistent formatting
const wellFormatted = [
    1,
    2,
    3,
    4,
    5
];
console.log('Well formatted array:', wellFormatted);

// 2. Use meaningful variable names
const studentNames = ['Alice', 'Bob', 'Charlie'];
const examScores = [85, 92, 78];
console.log('Meaningful names:', studentNames, examScores);

// 3. Use const for arrays that won't be reassigned
const constants = [1, 2, 3, 4, 5];
console.log('Const array:', constants);

// 4. Use let if you need to reassign the array
let mutableArray = [1, 2, 3];
mutableArray = [4, 5, 6];
console.log('Mutable array:', mutableArray);

// Video 3 [Array length, Index, Get and Set by index]


// Video 3 [Array length, Index, Get and Set by index]


const numbers = [1, 2, 3, 4, false];
console.log(numbers)

    ->

    // Video 3: Array length, Index, Get and Set by index

    console.log('\n=== Video 3: Array Length, Index, Get and Set ===');

// Creating an array for demonstration
const numbers = [1, 2, 3, 4, false];
console.log('Original array:', numbers);

// 1. Array Length
console.log('\n=== Array Length ===');
console.log('Length of numbers array:', numbers.length); // 5

// Length is always one more than the highest index
console.log('Highest index:', numbers.length - 1); // 4

// Empty array length
const emptyArray = [];
console.log('Empty array length:', emptyArray.length); // 0

// Array with single element
const singleElement = [42];
console.log('Single element array length:', singleElement.length); // 1

// 2. Array Indexing (Zero-based)
console.log('\n=== Array Indexing ===');

// Zero-based indexing means:
// Index 0 = First element
// Index 1 = Second element
// Index 2 = Third element
// And so on...

console.log('Index 0 (first element):', numbers[0]); // 1
console.log('Index 1 (second element):', numbers[1]); // 2
console.log('Index 2 (third element):', numbers[2]); // 3
console.log('Index 3 (fourth element):', numbers[3]); // 4
console.log('Index 4 (fifth element):', numbers[4]); // false

// Accessing elements with variables
const index = 2;
console.log(`Element at index ${index}:`, numbers[index]); // 3

// 3. Getting Elements by Index (GET)
console.log('\n=== Getting Elements by Index ===');

const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
console.log('Fruits array:', fruits);

// Get first element
console.log('First fruit:', fruits[0]); // apple

// Get last element (using length)
console.log('Last fruit:', fruits[fruits.length - 1]); // mango

// Get middle element
const middleIndex = Math.floor(fruits.length / 2);
console.log('Middle fruit:', fruits[middleIndex]); // orange

// Get element with bounds checking
const getElement = (array, index) => {
    if (index >= 0 && index < array.length) {
        return array[index];
    } else {
        return 'Index out of bounds';
    }
};

console.log('Safe get at index 2:', getElement(fruits, 2)); // orange
console.log('Safe get at index 10:', getElement(fruits, 10)); // Index out of bounds
console.log('Safe get at index -1:', getElement(fruits, -1)); // Index out of bounds

// 4. Setting Elements by Index (SET)
console.log('\n=== Setting Elements by Index ===');

const colors = ['red', 'green', 'blue', 'yellow'];
console.log('Original colors:', colors);

// Set element at specific index
colors[1] = 'purple';
console.log('After setting index 1:', colors); // ['red', 'purple', 'blue', 'yellow']

// Set first element
colors[0] = 'orange';
console.log('After setting first element:', colors); // ['orange', 'purple', 'blue', 'yellow']

// Set last element
colors[colors.length - 1] = 'pink';
console.log('After setting last element:', colors); // ['orange', 'purple', 'blue', 'pink']

// Set element with bounds checking
const setElement = (array, index, value) => {
    if (index >= 0 && index < array.length) {
        array[index] = value;
        return true;
    } else {
        return false;
    }
};

const testArray = ['a', 'b', 'c'];
console.log('Original test array:', testArray);

const success1 = setElement(testArray, 1, 'x');
console.log('Set at index 1:', success1, testArray); // true, ['a', 'x', 'c']

const success2 = setElement(testArray, 5, 'z');
console.log('Set at index 5:', success2, testArray); // false, ['a', 'x', 'c']

// 5. Practical Examples
console.log('\n=== Practical Examples ===');

// Student grades example
const studentGrades = [85, 92, 78, 95, 88];
console.log('Student grades:', studentGrades);

// Get average grade
const average = studentGrades.reduce((sum, grade) => sum + grade, 0) / studentGrades.length;
console.log('Average grade:', average);

// Update a specific grade
studentGrades[2] = 82; // Update third student's grade
console.log('Updated grades:', studentGrades);

// Shopping list example
const shoppingList = ['milk', 'bread', 'eggs', 'cheese'];
console.log('Shopping list:', shoppingList);

// Mark item as purchased (replace with uppercase)
shoppingList[1] = shoppingList[1].toUpperCase();
console.log('After marking bread as purchased:', shoppingList);

// 6. Common Index Operations
console.log('\n=== Common Index Operations ===');

const numbers2 = [10, 20, 30, 40, 50];
console.log('Numbers array:', numbers2);

// Find index of specific value
const findIndex = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1; // Not found
};

console.log('Index of 30:', findIndex(numbers2, 30)); // 2
console.log('Index of 100:', findIndex(numbers2, 100)); // -1

// Swap elements
const swapElements = (array, index1, index2) => {
    if (index1 >= 0 && index1 < array.length &&
        index2 >= 0 && index2 < array.length) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return true;
    }
    return false;
};

const swapArray = [1, 2, 3, 4, 5];
console.log('Before swap:', swapArray);
swapElements(swapArray, 1, 3);
console.log('After swapping index 1 and 3:', swapArray);

// 7. Error Handling
console.log('\n=== Error Handling ===');

// What happens when you access invalid index?
console.log('Accessing index -1:', numbers2[-1]); // undefined
console.log('Accessing index 10:', numbers2[10]); // undefined

// Safe access function
const safeGet = (array, index) => {
    if (index < 0 || index >= array.length) {
        return `Index ${index} is out of bounds (0-${array.length - 1})`;
    }
    return array[index];
};

console.log('Safe get at index -1:', safeGet(numbers2, -1));
console.log('Safe get at index 10:', safeGet(numbers2, 10));
console.log('Safe get at index 2:', safeGet(numbers2, 2));


const numbers = [1, 2, 3, 4, false];
console.log(numbers)


// Video 4: Add/ Remove elements from array using push, pop, shift & unshift


// Video 4: Add/ Remove elements from array using push, pop, shift & unshift


const numbers = [1, 2, 3, 4, false];
console.log(numbers)

numbers.push(23, 22, 14);
console.log(numbers)

    ->

    // Video 4: Add/ Remove elements from array using push, pop, shift & unshift

    console.log('\n=== Video 4: Add/Remove Elements from Arrays ===');

// Creating an array for demonstration
const numbers = [1, 2, 3, 4, false];
console.log('Original array:', numbers);

// 1. PUSH - Add elements to the END of an array
console.log('\n=== PUSH Method ===');
console.log('push() - Adds elements to the END of an array');

// Push single element
numbers.push(5);
console.log('After push(5):', numbers); // [1, 2, 3, 4, false, 5]

// Push multiple elements
numbers.push(6, 7, 8);
console.log('After push(6, 7, 8):', numbers); // [1, 2, 3, 4, false, 5, 6, 7, 8]

// Push returns the new length
const newLength = numbers.push(9);
console.log('push() returned:', newLength); // 9
console.log('Array after push:', numbers);

// 2. POP - Remove element from the END of an array
console.log('\n=== POP Method ===');
console.log('pop() - Removes and returns the LAST element');

// Pop single element
const lastElement = numbers.pop();
console.log('Popped element:', lastElement); // 9
console.log('Array after pop():', numbers); // [1, 2, 3, 4, false, 5, 6, 7, 8]

// Pop multiple times
const secondLast = numbers.pop();
const thirdLast = numbers.pop();
console.log('Second last popped:', secondLast); // 8
console.log('Third last popped:', thirdLast); // 7
console.log('Array after multiple pops:', numbers); // [1, 2, 3, 4, false, 5]

// Pop from empty array
const emptyArray = [];
const emptyPop = emptyArray.pop();
console.log('Pop from empty array:', emptyPop); // undefined

// 3. UNSHIFT - Add elements to the BEGINNING of an array
console.log('\n=== UNSHIFT Method ===');
console.log('unshift() - Adds elements to the BEGINNING of an array');

const fruits = ['apple', 'banana', 'orange'];
console.log('Original fruits:', fruits);

// Unshift single element
fruits.unshift('grape');
console.log('After unshift("grape"):', fruits); // ['grape', 'apple', 'banana', 'orange']

// Unshift multiple elements
fruits.unshift('mango', 'kiwi');
console.log('After unshift("mango", "kiwi"):', fruits); // ['mango', 'kiwi', 'grape', 'apple', 'banana', 'orange']

// Unshift returns the new length
const fruitsLength = fruits.unshift('pear');
console.log('unshift() returned:', fruitsLength); // 7
console.log('Array after unshift:', fruits);

// 4. SHIFT - Remove element from the BEGINNING of an array
console.log('\n=== SHIFT Method ===');
console.log('shift() - Removes and returns the FIRST element');

// Shift single element
const firstFruit = fruits.shift();
console.log('Shifted element:', firstFruit); // pear
console.log('Array after shift():', fruits); // ['mango', 'kiwi', 'grape', 'apple', 'banana', 'orange']

// Shift multiple times
const secondFruit = fruits.shift();
const thirdFruit = fruits.shift();
console.log('Second shifted:', secondFruit); // mango
console.log('Third shifted:', thirdFruit); // kiwi
console.log('Array after multiple shifts:', fruits); // ['grape', 'apple', 'banana', 'orange']

// Shift from empty array
const emptyShift = emptyArray.shift();
console.log('Shift from empty array:', emptyShift); // undefined

// 5. Comparison of Methods
console.log('\n=== Method Comparison ===');

const testArray = [1, 2, 3];
console.log('Original test array:', testArray);

// Push vs Unshift
console.log('\n--- Push vs Unshift ---');
const pushArray = [...testArray];
pushArray.push(4);
console.log('push(4):', pushArray); // [1, 2, 3, 4] - adds to end

const unshiftArray = [...testArray];
unshiftArray.unshift(0);
console.log('unshift(0):', unshiftArray); // [0, 1, 2, 3] - adds to beginning

// Pop vs Shift
console.log('\n--- Pop vs Shift ---');
const popArray = [...testArray];
const popped = popArray.pop();
console.log('pop():', popArray, 'removed:', popped); // [1, 2] removed: 3

const shiftArray = [...testArray];
const shifted = shiftArray.shift();
console.log('shift():', shiftArray, 'removed:', shifted); // [2, 3] removed: 1

// 6. Performance Considerations
console.log('\n=== Performance Considerations ===');

// Push/Pop are faster than Unshift/Shift
// Because they don't need to reindex the entire array

const largeArray = Array.from({ length: 10000 }, (_, i) => i);
console.log('Large array length:', largeArray.length);

// Timing push vs unshift
const startPush = Date.now();
largeArray.push(9999);
const endPush = Date.now();
console.log('Push time:', endPush - startPush, 'ms');

const startUnshift = Date.now();
largeArray.unshift(-1);
const endUnshift = Date.now();
console.log('Unshift time:', endUnshift - startUnshift, 'ms');

// 7. Practical Examples
console.log('\n=== Practical Examples ===');

// Shopping cart example
const shoppingCart = [];
console.log('Empty shopping cart:', shoppingCart);

// Add items to cart (push)
shoppingCart.push('milk');
shoppingCart.push('bread');
shoppingCart.push('eggs');
console.log('Cart after adding items:', shoppingCart);

// Remove last item (pop)
const removedItem = shoppingCart.pop();
console.log('Removed item:', removedItem);
console.log('Cart after removing last item:', shoppingCart);

// Add priority item to front (unshift)
shoppingCart.unshift('urgent: medicine');
console.log('Cart after adding priority item:', shoppingCart);

// Remove priority item (shift)
const priorityItem = shoppingCart.shift();
console.log('Removed priority item:', priorityItem);
console.log('Final cart:', shoppingCart);

// Queue implementation
console.log('\n--- Queue Implementation ---');
const queue = [];

// Enqueue (add to end)
queue.push('first');
queue.push('second');
queue.push('third');
console.log('Queue after enqueue:', queue);

// Dequeue (remove from front)
const firstInLine = queue.shift();
console.log('Dequeued:', firstInLine);
console.log('Queue after dequeue:', queue);

// Stack implementation
console.log('\n--- Stack Implementation ---');
const stack = [];

// Push to stack
stack.push('item1');
stack.push('item2');
stack.push('item3');
console.log('Stack after push:', stack);

// Pop from stack
const topItem = stack.pop();
console.log('Popped from stack:', topItem);
console.log('Stack after pop:', stack);

// 8. Common Patterns and Best Practices
console.log('\n=== Best Practices ===');

// Use push/pop for stack operations (LIFO)
const undoStack = [];
undoStack.push('action1');
undoStack.push('action2');
undoStack.push('action3');
console.log('Undo stack:', undoStack);

const lastAction = undoStack.pop();
console.log('Undo last action:', lastAction);

// Use push/shift for queue operations (FIFO)
const taskQueue = [];
taskQueue.push('task1');
taskQueue.push('task2');
taskQueue.push('task3');
console.log('Task queue:', taskQueue);

const nextTask = taskQueue.shift();
console.log('Process next task:', nextTask);

// Avoid using unshift/shift for large arrays
// Use alternative approaches for better performance
const efficientArray = [1, 2, 3, 4, 5];
console.log('Original array:', efficientArray);

// Instead of unshift, consider using spread operator
const newArray = [0, ...efficientArray];
console.log('Using spread instead of unshift:', newArray);


const numbers = [1, 2, 3, 4, false];
console.log(numbers)

numbers.push(23, 22, 14);
console.log(numbers)

// Video 5: Basic array methods and isArray, includes, indexOf, join, concat, slice, splice

console.log('=== Video 5: Basic Array Methods ===');

// 1. Array.isArray() - Check if a value is an array
const fruits = ['apple', 'banana', 'orange'];
const text = 'Hello World';
const number = 42;

console.log('Array.isArray(fruits):', Array.isArray(fruits)); // true
console.log('Array.isArray(text):', Array.isArray(text)); // false
console.log('Array.isArray(number):', Array.isArray(number)); // false
console.log('Array.isArray([]):', Array.isArray([])); // true
console.log('Array.isArray(null):', Array.isArray(null)); // false

// 2. includes() - Check if an array contains a specific element
const colors = ['red', 'green', 'blue', 'yellow'];
console.log('colors.includes("red"):', colors.includes('red')); // true
console.log('colors.includes("purple"):', colors.includes('purple')); // false
console.log('colors.includes("blue", 3):', colors.includes('blue', 3)); // false (search starts from index 3)

// 3. indexOf() - Find the index of an element in an array
const animals = ['cat', 'dog', 'bird', 'fish', 'cat'];
console.log('animals.indexOf("cat"):', animals.indexOf('cat')); // 0 (first occurrence)
console.log('animals.indexOf("bird"):', animals.indexOf('bird')); // 2
console.log('animals.indexOf("elephant"):', animals.indexOf('elephant')); // -1 (not found)
console.log('animals.indexOf("cat", 1):', animals.indexOf('cat', 1)); // 4 (search starts from index 1)

// 4. join() - Join array elements into a string
const words = ['Hello', 'World', 'JavaScript'];
console.log('words.join():', words.join()); // "Hello,World,JavaScript"
console.log('words.join(" "):', words.join(' ')); // "Hello World JavaScript"
console.log('words.join("-"):', words.join('-')); // "Hello-World-JavaScript"
console.log('words.join(""):', words.join('')); // "HelloWorldJavaScript"

// 5. concat() - Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined1 = arr1.concat(arr2);
console.log('arr1.concat(arr2):', combined1); // [1, 2, 3, 4, 5, 6]

const combined2 = arr1.concat(arr2, arr3);
console.log('arr1.concat(arr2, arr3):', combined2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// You can also concat with individual elements
const combined3 = arr1.concat(10, 11, arr2);
console.log('arr1.concat(10, 11, arr2):', combined3); // [1, 2, 3, 10, 11, 4, 5, 6]

// 6. slice() - Extract a portion of an array (doesn't modify original array)
const numbers2 = [10, 20, 30, 40, 50, 60, 70];
console.log('Original array:', numbers2);

const sliced1 = numbers2.slice(2, 5);
console.log('numbers2.slice(2, 5):', sliced1); // [30, 40, 50]

const sliced2 = numbers2.slice(1);
console.log('numbers2.slice(1):', sliced2); // [20, 30, 40, 50, 60, 70]

const sliced3 = numbers2.slice(-3);
console.log('numbers2.slice(-3):', sliced3); // [50, 60, 70]

const sliced4 = numbers2.slice(2, -2);
console.log('numbers2.slice(2, -2):', sliced4); // [30, 40, 50]

console.log('Original array after slice:', numbers2); // Original array unchanged

// 7. splice() - Add/remove elements from an array (modifies original array)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
console.log('Original months:', months);

// Remove elements
const removed = months.splice(1, 2);
console.log('months.splice(1, 2) - removed:', removed); // ['Feb', 'Mar']
console.log('months after splice:', months); // ['Jan', 'Apr', 'May']

// Add elements
months.splice(1, 0, 'Feb', 'Mar');
console.log('months.splice(1, 0, "Feb", "Mar"):', months); // ['Jan', 'Feb', 'Mar', 'Apr', 'May']

// Replace elements
months.splice(2, 1, 'March');
console.log('months.splice(2, 1, "March"):', months); // ['Jan', 'Feb', 'March', 'Apr', 'May']

// Practical examples combining multiple methods
console.log('\n=== Practical Examples ===');

const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log('Students:', students);

// Check if a student is in the list
const studentName = 'Charlie';
if (students.includes(studentName)) {
    const position = students.indexOf(studentName) + 1;
    console.log(`${studentName} is student #${position}`);
} else {
    console.log(`${studentName} is not in the list`);
}

// Create a formatted list
const formattedList = students.join(', ');
console.log('Student list:', formattedList);

// Split students into groups
const group1 = students.slice(0, 2);
const group2 = students.slice(2);
console.log('Group 1:', group1);
console.log('Group 2:', group2);

// Add a new student
students.splice(2, 0, 'Frank');
console.log('After adding Frank:', students);



