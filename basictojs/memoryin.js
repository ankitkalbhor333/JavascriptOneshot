// it stores the value in stack memory it name is primitive data type
let num1=100;
 let num2=num1;
console.log(num1);
console.log(num2);

//non-primitive data type it stores the value in heap memory
let arr1=[1,2,3,4,5,6,7]
let arr2=arr1;
arr2.push(8);
console.log(arr1);
console.log(arr2);
//string in javascript

let str1=new String("Ankit Kalbhor");
console.log(str1);
str2=str1.replace("Ankit","rahul")
console.log(str2);
console.log(str1)

console.log(str1.indexOf("K"));
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charAt(5));
console.log(str1.slice(0,5));
let str3="    Hello World     "
console.log(str3.trim());
