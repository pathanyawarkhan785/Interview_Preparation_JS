let sum = 0;
for (i = 0; i < 100; i++) {
  for (j = 100; j > 100 - i; j--) {
    sum++;
  }
}
console.log(sum);
