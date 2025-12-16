function createUser(username,score){
  this.username = username;
  this.score = score;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const obj=new createUser("ankit",88)
const obj2=new createUser("rahul",95)

obj.printMe();
obj2.printMe();