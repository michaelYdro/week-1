#!/usr/bin/env node

const cost = (num) => {
    const anum = Number.parseInt(num, 10);
if (anum < 0 || typeof anum !== 'number'){
throw new Error("invalid type of num")
}
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
    try {
    console.log(cost(-2));
    console.log(cost(4));
    console.log(cost(5));
    console.log(cost(9));
    console.log(cost(10));
    console.log(cost(100));
    }
    catch(e){
        console.log("caught " + e);
    }
