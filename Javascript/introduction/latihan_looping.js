// looping

// for(let i= 0; i<= 20; i++){
//     console.log(i);
// }

// const animals = ['cat','dog'];

// for (let i =0; i< animals.length; i++){
//     console.log(i, animals[i])
// }

// loop dalam loop

// let str = 'LOL';
// for(let i =0; i<=4; i++){
//     console.log("outer: ",i)
//     for(let j =0; j< str.length; j++){
//         console.log('   inner: ', str[j])
//     }
// }

// const pilihan = 'abcd';
// for (let i = 1; i <= 5; i++){
//     console.log(`${i}. soal nomor ${i}`)
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`  ${pilihan[j]}. Pilihan jawaban`)
//     }
// }

const studentRow = [
    ['aira','salsa','k'],
    ['air','salfsa','a'],
    ['ai','sal','3'],
];

for(let row of studentRow){
    for(let student of row){
        console.log(student)
    }
}

// for(i = 0; i< studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`seat Row # ${i +1}`);

//     for (let j =0; j <row.length; j++){
//         console.log(`  ${row[j]}`)
//     }
// }

// while
// let num =0;
// while (num <10 ){
//     console.log(num);
//     num++;
// }
// const PASSWORD = '123';

// let guess = prompt('masukan password');

// while( guess !== PASSWORD){
//     prompt(' sandi salah masukan pass lagi');

// }
// alert('sandi sudah benaar')

// let input = prompt("hei, say something!");

// while (true) {
// 	input = prompt('salah');
// 	if (input.toLowerCase == "stop") {
// 		break;
// 	}
// }
// alert("ok");

// for (let i = 0; i< 1000; i++){
//     console.log(i);
//     if(i === 100){
//         break;
//     }
// }

// let pertayaan = prompt(' apa makanan terenak ? \n masukan jawaban!')
// while(!pertayaan){
//     pertayaan = prompt(' apa makanan terenak ? \n masukan jawaban!')
// }

// let attemps = 1;
// let jawaban = 'esbatu';
// while( pertayaan.toLowerCase() !== jawaban){
//     attemps ++;
//     pertayaan = prompt('salah wkwk jawab laagi');
// }

// alert(`oke bner whahaha dengan percobaan ${attemps} kali`)

const fruits = ['banan','orange','apple'];

// for(let i =0; i< fruits.length; i++){
//     console.log(`buah ${fruits}`)
// }

for (let fruit of fruits){
    console.log(`Buah ${fruit}`)
}

// perulangan pada objects

const studentsScore = {
    aira : 20,
    rara :2,
};

//for in

// for( let student in studentsScore){
//     console.log(`${student} memiliki skor ${studentsScore[student]}`)
// }

let total = 0;
let scores = Object.values(studentsScore);

for( let score of scores){
    total += score;
}
console.log(total/ scores.length)