
// console.log(array1);
// array1.unshift(0);
// console.log(array1);
// array1.shift();
// console.log(array1);
// console.log(array1.includes(3));

// let newarray1=array1.slice(1,2);
// console.log(newarray1);
// let newarray2=array1.splice(0,5);
// console.log(newarray2);
let array1=new Array(1,2,3,4,5);
let array2=[6,7,8,9,10];
let spreadarray=[...array1,...array2];
// console.log(spreadarray.map((value)=>{
//   return value*2;
// }));

// console.log(spreadarray.filter((v)=>{
//   if(v%2===0){
//     return v;
//   }
// }))
let arrayinarray=[[1,2,3,],[4,5,6,7],[1,2,[2,3,45]]]
console.log(arrayinarray.flat(2));