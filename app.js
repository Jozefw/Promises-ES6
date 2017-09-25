promiseResult = new Promise((resolve, reject) => {
    setTimeout(() => {
    	resolve();
    },3000)
});

promiseResult
.then(() => {
  console.log('We are finshed here!');
})
.then(() => {
	console.log("I also finshed with this!")
})
.catch(() => {
	console.log("Uh, oh...I reject this.")
})
promiseResult.catch(() => {

});