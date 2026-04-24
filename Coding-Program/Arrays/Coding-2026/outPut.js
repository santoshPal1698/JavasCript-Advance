(function(){ 
  var a = b = 3; 
})();
console.log("a defined? " + (typeof a !== 'undefined'));  //  false
console.log("b defined? " + (typeof b !== 'undefined'));  // true
 
 
console.log("3" + "3" + "3"); // 333
console.log("3" + "3" - "3");   //30
 
 
let number = 0; 
console.log(number++); // 0
console.log(++number);  //2
console.log(number);  //2
 
console.log(1==='1')   // false
console.log(x)         // undefinrv
var x=1
 
 
var a=10
function test(){
  console.log(a)  
  var a=11;     
  console.log(a)   /// 11
}
test();  //  


