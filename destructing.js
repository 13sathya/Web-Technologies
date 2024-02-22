const scores=[10,20,30,40,50,60];
console.log(scores[0]);
console.log(scores[1]);
const[x, ,i,...restop]=scores; //rest operator
console.log("rest operator")
console.log(x);
console.log(i);
console.log(restop);
console.log("-------");
// other operator
console.log(" other operator")
const[z,y, ,...other]=scores;
console.log(z);
console.log(y);
console.log(other);