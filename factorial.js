function firstFactorial(num) {
    if (num < 0) return 'factorial not possible.';
    else if (num === 0) return 1;
    else {
        let temp = 1;
        while (num > 0) {
            temp = temp * num;
            num--;
        }
        return temp;
    }
}

console.log(firstFactorial(0));
