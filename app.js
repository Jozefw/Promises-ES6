let promiseResult = new Promise((resolve, reject) => {
    resolve();
});

promiseResult.then(() => {
  console.log('We are finshed here!');
});
promiseResult.catch(() => {

});