function addToCart(){
    this.pName="Pen";
    this.getProduct=function(){
        console.log(this);
        setTimeout(function(){
            console.log(this);
            console.log(this.pName);
        },1000);
    }
}
let obj=new addToCart();
obj.getProduct();