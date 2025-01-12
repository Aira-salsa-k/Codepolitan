// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();
// 	const noteValue = input.value;
// 	const newList = document.createElement('li');
// 	newList.innerText = noteValue;
// 	list.append(newList);
// 	input.value = '';
// });

const form = document.querySelector('#form')
const input = document.querySelector('input')
const list = document.querySelector('#notes')

input.addEventListener('change', (e) => {
	console.log('nilai berubah')
})

input.addEventListener('input', (e) => {
	// document.querySelector('h1').innerText = input.value;
	console.log('nilai berubah')
})

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const noteValue = input.value;

	// console.log(noteValue)
	const newList = document.createElement('li');
	newList.innerText = noteValue;

	// console.log(newList)

	list.append(newList)

	input.value = ' ';

});

list.addEventListener('click',(e) => {
	e.target.nodeName === 'LI' && e.target.remove();
	// console.dir(e.target)
})

// const lis = document.querySelectorAll('li');
// for (let li of lis){
// 	li.addEventListener('click', function(){
// 		li.remove();
// })
// }