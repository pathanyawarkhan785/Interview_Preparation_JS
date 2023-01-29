let y = (p) => {
  for (i = 1; i <= p; i++) {
    // console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('socialpilot');
    } else if (i % 3 == 0) {
      console.log('social');
    } else if (i % 5 == 0) {
      console.log('pilot');
    } else {
      console.log(i);
    }
  }
};
y(35);
