//+ call stack function
// console.log('bakal muncul pertama');

// setTimeout(() => {
//     console.log('ini udah masuk memory proses tapi  di jaalankan 3 detik kemudian')
// }, 3000);

// console.log('bakal muncul kedua')
//+ promise
//+object yang dijanjikan asyncronous

const estimasi = 10_000;
setTimeout(() => {
	console.log("hai bro");
}, estimasi);
