const makeItBeautiful = (arr) => {
    let i = 0;
    let temp = arr[0];
    while (arr[i]) {
        if (arr[i] === arr[i + 1]) {
            return 'ugly';
        }
        temp = temp + arr[i + 1];
        if (temp === arr[i + 1]) {
            return 'ugly';
        }
        i++;
    }
    return 'beautiful';
};
console.log(makeItBeautiful([6, 3, 9, 6]));
