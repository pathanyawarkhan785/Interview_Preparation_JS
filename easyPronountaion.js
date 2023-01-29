const easyPron = (str) => {
    str = str.trim();
    let temp = [];
    if (str.length < 4) return 'yes';

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    arr = str.split('');
    arr.filter((val) => {
        if (vowels.includes(val)) temp.push(arr.indexOf(val) + 1);
    });
    if (!temp[0]) return 'no';
};
console.log(easyPron('gfrir'));
