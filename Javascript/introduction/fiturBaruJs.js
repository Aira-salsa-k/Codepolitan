/////////////////+ mengatur default value pada function
function lemparDadu(sisi = 6) {
	return Math.floor(Math.random() * sisi) + 1;
}

function sapa(name = "user", msg = "selamat bekerja") {
	console.log(`${name} ${msg}`);
}

sapa("aira");

//////////////+ spread operator
const angka = [1, 2, 3, 4];
const maxAngka = Math.max(...angka);

console.log(maxAngka);

/////////////+ merged arrya dengan spread operator
const nama = ["aira", "rara", "felix"];

angka.push(0);
console.log(angka);

const campuran = [...angka, ...nama];
console.log(campuran);

/////////////+ merged object dengan object lainnya
const user = {
	name: "john",
	email: "john@doegamil.com",
};

const credential = {
	password: "1233",
	token: "9384958425d",
};
const userBaru = { ...user, ...credential };

console.log(userBaru);

//////////////////+ Rest param
const sumAll = (...nums) => {
	return nums.reduce((total, el) => total + el);
};
console.log(sumAll(1, 2, 3, 4, 5));

const names = ["alec", "ana", "zaza", "axure", "ui"];
const pemenang = (gold, silver, brownze, ...sisa) => {
	console.log(`medali emas diraih: ${gold}`);
	console.log(`medali silver diraih: ${silver}`);
	console.log(`medali perak diraih: ${brownze}`);
	console.log(`sisa pesertanya : ${sisa}`);
};
pemenang(...names);

///////////////////////+ bongkar elemnt array dengan mudah
const namah = ["rara", "lala", "poh", "sasa", "de"];

const [gold, silver, bronze, ...peserta] = namah;
console.log(peserta);

//////////////////////+ bongkar object dengan mudah
const pelanggan = {
	name: "john",
	email: "john@gmial.com",
	role: "Admin",
};

const { name, email, phone = "2304985" } = pelanggan;
console.log(phone);

////////////////////+ bongkar object di function

const usereAndRole = ({ name, role }) => {
	return `${name} ${role}`;
};

console.log(usereAndRole(pelanggan));

const animes = [
	{
		title: "atatck ot",
		rating: 90,
		year: 2009,
	},

	{
		title: "dorammon",
		rating: 80,
		year: 2011,
	},

	{
		title: "naruto",
		rating: 100,
		year: 2012,
	},
];

const filmAnime = animes.map(({ title, year, rating }) => {
	return `${title}(${year} rating ${rating})`;
});

console.log(filmAnime);
