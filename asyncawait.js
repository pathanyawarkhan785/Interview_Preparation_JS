async function ywr() {
  console.log("before fetching");
  var a = await fetch("https://api.github.com/users");
  console.log("after fetching");
  var res = await a.json();
  console.log(res);
}
console.log("before calling ywr function");
let p = ywr();
console.log("after calling ywr function");
// p.then((data) => console.log(data));
// console.log("finish");
