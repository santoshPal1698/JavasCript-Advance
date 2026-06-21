const arr = [1, 2, 3, [2, [34, 65]]];

// ==========================================
// METHOD 1: Using Built-in .flat() Method
// ==========================================
// Description: Simplest modern approach
// Syntax: array.flat(depth)
// depth: How many levels deep to flatten (Infinity = all levels)
// Time Complexity: O(n)
// Space Complexity: O(n)
console.log("METHOD 1: Using .flat()");
const flat = arr.flat(Infinity);
console.log(flat); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 2: Recursive Approach with for...of
// ==========================================
// Description: Uses recursion to flatten nested arrays
// How it works: 
//   - Loop through each item
//   - If item is an array, recursively flatten it
//   - Otherwise, add the item to result
console.log("\nMETHOD 2: Recursive with for...of");
const flatArr = (array) => {
  let res = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      res.push(...flatArr(item)); // Spread operator to add flattened array
    } else {
      res.push(item);
    }
  }
  return res;
}
console.log(flatArr(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 3: Using reduce() Method
// ==========================================
// Description: Functional approach using reduce
// How it works:
//   - accumulator starts as empty array
//   - For each item, check if it's an array
//   - If array, recursively reduce it and spread into accumulator
//   - If not, add directly to accumulator
console.log("\nMETHOD 3: Using reduce()");
const flatReduce = (array) => {
  return array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatReduce(item) : item);
  }, []);
}
console.log(flatReduce(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 4: Using forEach with Recursion
// ==========================================
// Description: forEach loop with recursive flattening
// How it works:
//   - Uses forEach instead of for loop
//   - Same recursive logic as Method 2
//   - More functional style
console.log("\nMETHOD 4: Using forEach()");
const flatForEach = (array) => {
  let res = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      res = res.concat(flatForEach(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
console.log(flatForEach(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 5: Using toString() and split()
// ==========================================
// Description: String manipulation approach
// How it works:
//   - Convert array to string (removes brackets automatically)
//   - Split by comma to get individual numbers
//   - Convert back to numbers using map
// Limitation: Only works for numeric arrays
console.log("\nMETHOD 5: Using toString() and split()");
const flatString = (array) => {
  return array.toString().split(',').map(Number);
}
console.log(flatString(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 6: Using flatMap() with concat()
// ==========================================
// Description: Modern approach using flatMap
// How it works:
//   - flatMap applies function and flattens one level
//   - Combine with recursion for nested arrays
console.log("\nMETHOD 6: Using flatMap()");
const flatMapMethod = (array) => {
  return array.flatMap(item =>
    Array.isArray(item) ? flatMapMethod(item) : item
  );
}
console.log(flatMapMethod(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 7: Using Generator Function
// ==========================================
// Description: Uses generator function for memory efficiency
// How it works:
//   - Generator yields values one by one
//   - Useful for large arrays (lazy evaluation)
//   - Converts generator to array with spread operator
console.log("\nMETHOD 7: Using Generator Function");
function* flatGenerator(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      yield* flatGenerator(item); // yield* delegates to another generator
    } else {
      yield item;
    }
  }
}
const flatGen = (array) => [...flatGenerator(array)];
console.log(flatGen(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// METHOD 8: Using While Loop with Stack
// ==========================================
// Description: Iterative approach using stack (no recursion)
// How it works:
//   - Create a stack array, push first array
//   - While stack has items, pop and check
//   - If array, push its items back to stack
//   - If number, add to result
// Advantage: Avoids recursion depth limit
console.log("\nMETHOD 8: Using While Loop with Stack");
const flatStack = (array) => {
  const result = [];
  const stack = [...array];
  
  while (stack.length) {
    const item = stack.shift(); // Remove from front (like queue)
    
    if (Array.isArray(item)) {
      stack.unshift(...item); // Add items back to front
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatStack(arr)); // Output: [1, 2, 3, 2, 34, 65]


// ==========================================
// PERFORMANCE COMPARISON
// ==========================================
console.log("\n=== PERFORMANCE COMPARISON ===");
const largeArray = Array(1000).fill([1, 2, [3, [4, 5]]]);

console.time("Method 1: .flat()");
flat.length && true; // dummy operation
console.timeEnd("Method 1: .flat()");

console.time("Method 2: Recursive for...of");
flatArr(largeArray);
console.timeEnd("Method 2: Recursive for...of");

console.time("Method 3: reduce()");
flatReduce(largeArray);
console.timeEnd("Method 3: reduce()");

console.time("Method 8: Stack (Iterative)");
flatStack(largeArray);
console.timeEnd("Method 8: Stack (Iterative)");


// ==========================================
// RECOMMENDATION
// ==========================================
/*
✓ Use METHOD 1 (.flat()) for:
  - Clean, readable code
  - Production code
  - Most scenarios

✓ Use METHOD 3 (reduce) for:
  - Functional programming style
  - Custom logic needed

✓ Use METHOD 8 (Stack) for:
  - Very deep nesting (avoid recursion limit)
  - Performance critical code

✓ Use METHOD 7 (Generator) for:
  - Large arrays where memory matters
  - Lazy evaluation needed
*/
