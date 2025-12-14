let array=[1,2,3,4,5];

let arr=array.filter((v)=>{
 return  v%2===0
})
console.log(arr);

let arr2=array.map((v)=>{
return v*2;
})
console.log( arr2);


let arr3=array.forEach((v)=>{
  return v*2;
});
console.log(arr3);