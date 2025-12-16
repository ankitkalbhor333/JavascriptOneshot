class bike{
  constructor(brand,price){
    this.brand=brand;
    this.price=price;
  }


  get getPrice(){
    return this.price;
  }
  set setPrice(newPrice){
    this.price=newPrice;
   }

  }
   const  objact =new bike("honda",80000);
    console.log(objact.price);
console.log(objact.getPrice);
console.log(objact.setPrice=90000);
  
