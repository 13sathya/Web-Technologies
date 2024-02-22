class User{
    constructor(urname,email,password){
           this.urname=urname;
           this.email=email;
           this.password=password;
    }
    static countUser(){
        console.log("there are 25 users.");
    }
  register(){
        console.log(this.urname+ " is now registered.");
    }
}
const details=new User("sathya","sathya@cvr.ac.in","sathya123");
details.register();
// User.register();
User.countUser();
//details.countUser();

class member extends User{
    constructor(urname,email,pwd,memPackage){
        super(urname,email,pwd);
        this.package=memPackage;
    }
    getPackage(){
        console.log(this.username + "is sub suibed to the standard");
    }
}
let it =new member("ita", "ita@cvr.ac.in","1246",);
it.getPackage();

