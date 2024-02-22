function addToCart(){
    this.pName="Pen";
    this.getProduct=function(){
        console.log(this);
       setTimeout(()=>{
        console.log(this.pName),2000
       });
    }
}
let obj=new addToCart();
obj.getProduct();