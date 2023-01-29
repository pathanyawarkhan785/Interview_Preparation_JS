const a = [
  {
    name: "A",
    age: 10,
  },
];

for (let y = 66; y < 91; y++) {
  let p = String.fromCharCode(y);
  // console.log(p);
  a.push({ name: p });
}

console.log(a);
