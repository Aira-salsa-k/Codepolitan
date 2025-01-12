// document.querySelector('button').addEventListener('click', (e) => {
// 	console.log(e);
// });

// const input = document.querySelector('input');
// input.addEventListener('keydown', (e) => {
// 	switch (e.code) {
// 		case 'ArrowUp':
// 			console.log('Tombol Arah Atas');
// 			break;
// 		case 'ArrowDown':
// 			console.log('Tombol Arah Bawah');
// 			break;
// 		case 'ArrowLeft':
// 			console.log('Tombol Arah Kiri');
// 			break;
// 		case 'ArrowRight':
// 			console.log('Tombol Arah Kanan');
// 			break;
// 		default:
// 			console.log('diabaikan');
// 	}
// });

// // input.addEventListener('keyup', () => {
// // 	console.log('Tombol dirilis');
// // });


///////+ my verse
document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
})

const input = document.querySelector('input');
input.addEventListener('keydown', (e)=> {

	switch(e.code){
		case 'ArrowUp': 
			console.log('tombol arah atas')
			break;
		case 'ArrowDown': 
			console.log('tombol arah bawah')
			break;
		case 'ArrowRight': 
			console.log('tombol arah kanan')
			break;
		case 'ArrowRight': 
			console.log('tombol arah atas')
			break;

		default:
			console.log('tombol biasa aja')
	}
	// console.log(e.key)
	// console.log(e.code)
})
// input.addEventListener('keyup', ()=> {
// 	console.log('tombol di lepad')
// })