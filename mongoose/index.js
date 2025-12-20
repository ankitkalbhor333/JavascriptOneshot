import mongoose from 'mongoose';

async function main() {
  await mongoose.connect("mongodb://localhost:27017/mydatabase");
  console.log("connected");
}

main().catch((e) => {
  console.log(`error: ${e}`);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name: "ankit",
  email: "ankitkalbhor@gmail.com",
  age: 12
});

user1.save().then(() => {
  console.log("saved");
}).catch((err) => {
  console.log(`save error: ${err}`);
});

User.insertMany([
  {name:"rahul",email:"rahul@gmail.com",age:12},
  {name:"raju",email:"raju@gmail.com",age:88},
  {name:"musk",email:"musk@gmail.com",age:32}])



  // User.find().then((data)=>{
  //   console.log(data)
  // })

  // User.find({age:{$gte:22}}).then((data)=>{
  //   console.log(data);
  // })

  User.findOneAndUpdate({name:"ankit"},{name:"world champigon"},{new:true}).then((data)=>{
    console.log(data)
  })

  User.deleteOne({name:"ankit"}).then((data)=>{
    console.log(data)
  })