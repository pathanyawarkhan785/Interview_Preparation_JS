const polyCarp = (str) => {
    let count = 0;
    if (str[0] != '3') return count;
    let pi = '314159265358979323846264338327';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === pi[i]) count++;
    }
    return count;
};

console.log(polyCarp('314159265358979323846264338327'));
