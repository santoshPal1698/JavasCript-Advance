
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

if(typeof x === 'undefined') {
    console.log("x is undefined");
}   
console.log(x);

const a = {};
Object.defineProperty(a, 'x', { value: 1, writable: false });
a.x = 2;
console.log(x);

async function foo() { return await Promise.reject("E"); } 
foo().catch(e => console.log("caught"));

const arr = [1, , 3]; 
console.log(arr.map(x => 10));

let n = 1; 
function f(x = n++, y = n++) {
return x + y; 
} 
console.log(f(), f());

setTimeout(() => console.log("t")); 
Promise.resolve().then(() => console.log("p")); 
process.nextTick(() => console.log("n")); 
console.log("sync");

const user = Object.freeze({name: 'John'}); 
user.name = 'Doe'; 
console.log(user.name);