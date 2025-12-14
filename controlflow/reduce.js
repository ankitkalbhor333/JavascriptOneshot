const arrayobj=[{
  food:"biryani",
  price:200
},{
  food:"burger",
  price:100
},{
  food:"pizza",
  price:300
}]



const totalprice=arrayobj.reduce((acc,cur)=>acc+cur.price,0);
console.log(totalprice);