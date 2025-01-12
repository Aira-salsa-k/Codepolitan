// foreEach methods
const angka = [1, 2, 3, 4, 5,6,7,8,9];

const angkaDouble = angka.map(function (num) {
	return num * 2;
});

console.log(angkaDouble);
// function print (element){
//     console.log(element)
// }

// angka.forEach(print);

// angka.forEach(function(el){

//     if(el % 2 === 0){
//         console.log(el)
//     }
// });

const animes = [
	{
		title: "atatck ot",
		rating: 90,
        year : 2009
	},

	{
		title: "dorammon",
		rating: 80,
        year : 2011
	},

	{
		title: "naruto",
		rating: 100,
        year : 2012
	},
];


///////////////////////////////////filter
const animeBagus = animes.filter(anime => anime.rating >= 85);
const judulAnimeBagus = animeBagus.map(anime => anime.title)
console.log(animeBagus)
console.log(judulAnimeBagus)

const judulAnimeBagusBanget = animes.filter((anime) => anime.rating >= 85)
.map((anime) => anime.title);

// fiter anime baru
const animeBaru = animes.filter((anime)=> anime.year >2010);
console.log(`anime baru :`)
console.log(animeBaru)

animes.forEach(function (anime) {
	console.log(`${anime.title} - ${anime.rating}/100`);
});

// output dari map = =aaray
// ,apping

const animelist = animes.map(function(anime) {
	return anime.title.toUpperCase();
});

console.log(animelist)


// arrow function
function perkalian (x){
    return x*x;
}

const hasilKali = perkalian(5)

console.log(hasilKali)

const perpangkatan = (x) =>{
    return x*x
}

let hasilPangkat = perpangkatan(3)
console.log(hasilPangkat)

// implisit return

const random = () => (
    Math.floor(Math.random() *100) 
);

console.log(random())

const add = (a,b) => a+b 

console.log(add(3,3))

// setTimeot dan setInterval
// console.log('haloo');

// setTimeout(() => {
    
// console.log('masih di sana gak?');
// }, 5000)
// console.log('saya pergi ya..')

// const Interval = setInterval(()=> {
//     console.log(Math.random())
// }, 2000)

// setTimeout(() => {

// clearInterval(Interval)
// }, 5000)

// ///////////////////////memilih data tertentu dalam array dengan filter array
const angkaGanjil = angka.filter(n => {
    return n < 5;
});

console.log(angkaGanjil)

/////////////////////////////////every wajib benar, some flexibel
const examScore = [90,66,77,88,50,56];

const isGraduate = examScore.every((score)=> score >= 75)

console.log(isGraduate)

const isAnimeListNow = animes.some((anime)=> anime.year > 2020)
console.log(isAnimeListNow)

/////////////////////////////reduce -> single value
const subtotal = [1500,20000,4000];

const total = subtotal.reduce((currentTotal, singleSubtotal) => {
    return currentTotal + singleSubtotal;
   
})

console.log(total)

let totalExam = 0;
for (let score of examScore){
    totalExam += score;
}

console.log(totalExam)

let totalExamReduce = examScore.reduce((total, score) => {
    return total + score;
} )

console.log(totalExamReduce)

//from anime

const bestAnime = animes.reduce((bestAnime, curranime)=> {
   console.log(bestAnime, curranime)
     if(curranime.rating > bestAnime.rating){
        return curranime;
    }
    return bestAnime;
})

console.log(bestAnime)

////////// + object this dalam arrow fuction pada obejec global window
const person = {
    firstName : 'John',
    lastName : 'Doe',
    fullName: function(){

        return `${this.firstName} ${this.lastName}`
    },

    panggilNanti: function(){
        setTimeout(() => {
            console.log(this.firstName);
        }, 3000);
    },

    tampilkanNama : function(){
        console.log(this.fullName())
    }
};

person.tampilkanNama();
person.panggilNanti()
