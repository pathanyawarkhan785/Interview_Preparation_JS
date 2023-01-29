async function timeTest() {
  let t = Date.now();
  timeTest().then(() => {
    let finishTime = Date.now();
    let timeTaken = finishTime - t;
    console.log("Time taken in milliseconds: " + timeTaken);
  });
}
timeTest();
