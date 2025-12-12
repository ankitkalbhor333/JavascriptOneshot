let Jsuser={
  name:"ankit",
  age:22,
  city:"pune",
  
}
Jsuser.greeting=function(){
  console.log(`hello my name is ${this.name}`);
}
Jsuser.greeting();// 