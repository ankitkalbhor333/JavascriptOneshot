// (function() {
//   let data = "User info";
//   console.log(data); // "User info"
// })();
// let data = "Global info";
// console.log(data); // ❌ ReferenceError → safe, no leak
let val1=100;
let val2=200;
function myfun(num1,num2){
 total=num1+num2;
return total;

}
     // 300
myfun(100,200);
console.log(global.total); // 300
console.log(this.total);   // undefined (this !== global)
