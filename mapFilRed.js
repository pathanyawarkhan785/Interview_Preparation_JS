const arr = [4, 2, 9];

const newArr = arr.map((val, ind, arr) => {
    return val + 1;
});

// console.log(newArr);

const arr2 = [3, 6, 2];
const newArr2 = arr2.filter((val, ind, arr) => {
    return val > 5;
});

// console.log(newArr2);

const arr3 = [1, 2, 3, 4];

const newArr3 = arr3.reduce((acc, curVal) => {
    acc + curVal;
});

console.log(newArr3);
