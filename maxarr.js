var arr = [33, 24, 33, 12, -43, 2, 6, 54, 4, 33, 45, 6, 31];

// console.log(arr.length);

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    // console.log("setting max value to " + max);
  }
}

// console.log(max);

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    // console.log("setting min value to " + min);
  }
}

// console.log(min);
// console.log("ywr");

function ywr() {
  let a = document.getElementById("txt1");
  let b = document.getElementById("txt2");
  b.value = a.value;
}
