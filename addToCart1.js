function addToCart(){
    this.pName="Pen";
    this.getProduct=function(){
        const that=this;
        console.log(that);
        setTimeout(function(){
            console.log(that);
            console.log(that.pName);
        },1000);
    }
}
let obj=new addToCart();
obj.getProduct();