function palindrome(str) {
    let arr = str.split('').reverse().join('');
    if (str === arr) return 'palindrome';
    return 'not palindrome';
}

console.log(palindrome('12321'));
