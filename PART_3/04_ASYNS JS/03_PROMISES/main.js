let myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

myPromise
  .then((result) => {
    console.log(result); // If resolved
  })
  .catch((error) => {
    console.log(error); // If rejected
  });
