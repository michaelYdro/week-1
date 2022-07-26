#!/usr/bin/env node
const seperate = (element) => {
    const odd = [];
    const even = [];
    element.forEach(element => {
        if (element % 2 === 0){
        even.push(element);
        }
        else {
        odd.push(element);
        }

    });
    return [odd, even];

};
console.log(seperate([1, 5, 6, 79]));
