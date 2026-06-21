let arr = ["a", "a", "b", "c", "c", "c", "d"]; // outPut { a: 2, c: 3 }
const str = "programming";

// 1st RemoveDuplicates character  arr
const removeDuplicate = (arr) => {
  let obj = {};
  let result = {};
  for (let item of arr) {
    obj[item] = (obj[item] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) {
      result[key] = obj[key];
      console.log(key, obj[key]);
    }
  }
  return result;
};
// console.log(removeDuplicate(arr));

// 2nd ReverseString & Palindrome
const reverStr = (str) => {
  return str === str.split("").reverse().join(""); // Palindrome
  let result = ""; // 1st Method
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
  // 2nd Method
  return str.split("").reverse().join("");
};
console.log(reverStr("santosh Pal"));
console.log("revser strn", reverStr("MADAM"));

// 3rd Largest arr
const arr1 = [10, 20, 20, 5, 80, 30, 30];
const largestArr = (arr) => {
  return [...new Set(arr)]; // 1st Method
  let largest = arr[0];
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};
console.log(largestArr(arr1));

// 4th Find Missing Number
const misarrNum = [1, 2, 3, 5];
const missingArrayNum = (arr) => {
  let res = "";
  let num = 5;
  let formula = (num * (num + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return formula - actualSum;
};
console.log(missingArrayNum(misarrNum));

// 5th DeBounce Method
function char() {
  console.log("Santosh called");
}
function deBounce(func, delay) {
  let timmer;
  return function (...args) {
    clearTimeout(setTimeout);

    timmer = setTimeout(() => {
      func.apply(this.args);
    }, delay);
  };
  // return timmer;
}
console.log(deBounce(char, 3000));

// 6th Throttle function
function thRottle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this.args);
    }
  };
}
console.log(thRottle(char, 1000));

// 7th How to Create Promise
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved Succefully");
  } else {
    reject("Promise rejected");
  }
});
promise.then((res) => console.log(res)).catch((err) => console.log("err"));


// 8th Create Own Cutstom Protype Method
Array.prototype.myMapCustom = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log([1, 2, 3, 5, 6, 7].myMapCustom((x) => x * 2));


// 9th Group Array by property
const users = [
  { name: "Santosh", city: "Indore" },
  { name: "Shivansh", city: "bhopal" },
  { name: "Sani", city: "Pune" },
];
let result = users.reduce((acc, user) => {
  acc[user.city] = acc[user.city] || [];
  acc[user.city].push(user);
  return acc;
}, {});

console.log(result);


// 10th Flatarry Method
const flatarr = [1,[2,[3,4],5]];
const flatten = (arr)=>{
  return arr.reduce((acc,curr)=>{
    return acc.concat(Array.isArray(curr)? flatten(curr):curr);
  },[]);
}
console.log(flatten(flatarr));
