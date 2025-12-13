// let Jsuser={
//   name:"ankit",
//   age:22,
//   city:"pune",
  
// }

// const {name:n}=Jsuser;
// console.log(n)
// Jsuser.greeting=function(){
//   console.log(`hello my name is ${this.name}`);
// }
// Jsuser.greeting();// 
// Example: GET request
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
