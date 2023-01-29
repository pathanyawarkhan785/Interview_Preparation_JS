const finalNum = (num, failDig) => {
    arr = num.split('');
    for (let i in arr) {
        if (arr[i] == failDig) {
            delete arr[i];
        }
    }
    return arr.join('');
};

console.log(finalNum('711721', 1));
