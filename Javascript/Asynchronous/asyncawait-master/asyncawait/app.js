// const hello = async () => {
// 	// throw 'Maaf gak kenal';
// 	return 'Hello World';
// };

// hello()
// 	.then((res) => {
// 		console.log('response', res);
// 	})
// 	.catch((err) => {
// 		console.log('error', err);
// 	});

const hello = async () => {
	// return 'hello world';

	throw "maaf ga kenal";
};

hello().then((res) => {
	console.log('response', res)
}).catch((err) => {
	console.log('error',err)
})

console.log(hello)