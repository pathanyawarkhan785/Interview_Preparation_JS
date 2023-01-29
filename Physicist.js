// Young Physicist (codeforces)

const prompt = require('prompt-sync')();

const yngPhys = (arr1, arr2, arr3) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] + arr2[i] + arr3[i] !== 0) {
            return 'NO';
        }

        return 'YES';
    }
};

let arr1 = [],
    arr2 = [],
    arr3 = [];
let n = parseInt(prompt());

for (let i = 0; i < n; i++) {
    let temp = parseInt(prompt());
    arr1.push(temp);
}

for (let i = 0; i < n; i++) {
    let temp = parseInt(prompt());
    arr2.push(temp);
}

for (let i = 0; i < n; i++) {
    let temp = parseInt(prompt());
    arr3.push(temp);
}

console.log(yngPhys(arr1, arr2, arr3));
