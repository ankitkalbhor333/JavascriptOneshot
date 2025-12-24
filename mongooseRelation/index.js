import mongoose from "mongoose"
import express from "express"

let app=express();


async function  main(){
    await mongoose.connect("mongodb://localhost:27017/relationaldatabase")
    console.log("connected");
}

main().then(()=>{
  console.log("database is connected fine")
}).catch((error)=>{
  console.log(error)
})

const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  address:[{location:String,city:String},
  ],
})

const User=mongoose.model("User",userSchema)

let adduser=async ()=>{
let user1=new User({
  name:"ankit",
  email:"ankitkalbhor3@gmail.com",
  address:[{location:"bhopal",city:"indore"}]
})

 await user1.save()
 console.log("data is stored")

}

adduser()

