const IsUserLoggedIn=true;
const temperature=41;
if(IsUserLoggedIn){
  if(temperature>40){
    console.log("User is logged in and it's too hot outside");
  }else{
    console.log("temperature is normal")
  }
}else{
    console.log("User is not logged in");
  }


let score=100;
if(score>90){
  console.log("Grade A");
} else if(score>80){
  console.log("Grade B");
}
else if(score>70){
  console.log("Grade C");
}

let loggedinfromemail=true;
let loggedinfromnumber=true;
if(loggedinfromemail || loggedinfromnumber){
  console.log("User is logged in");
}