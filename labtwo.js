#!/usr/bin/env node

const cost = (num) => {
if (num < 5){
    return num * 100;
}
else if(num >= 5 && num < 10){
    return num * 95;
}
else {
    return num * 90;
}

}
console.log(cost(1));
console.log(cost(4));
console.log(cost(5));
console.log(cost(9));
console.log(cost(10));
console.log(cost(100));
