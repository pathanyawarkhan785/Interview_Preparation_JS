const countBoomerangs = (arr) => {
    let count = 0,
        i = 0;
    while (arr[i]) {
        if (arr[i] === arr[i + 2] && arr[i] != arr[i + 1]) {
            count++;
        }
        i++;
    }
    return count;
};
console.log(countBoomerangs([1, 2, 1, 2]));
