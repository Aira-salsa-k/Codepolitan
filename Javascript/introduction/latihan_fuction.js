// function javacript
//potongan kode yang di gunakan kembali,dan akan sering di gunakaan

// let lemparDadu = Math.floor(Math.random()*6 ) + 1;

// console.log(lemparDadu);

function lemparDadu(){
console.log(Math.floor(Math.random()*6 ) + 1);
 
}
lemparDadu();

function nyanyi (){
    console.log("cek.")
    console.log("do re  mi .")
}

nyanyi()

function selamatPagi(name){
    console.log(`halo sealamat pagi ${name}`)
}

selamatPagi('aira')

function jumlahkan(a, b=0){
    if(typeof a !== 'number' || b!== 'number'){
        return false;
    }else{
        return a+b;
    }
}

jumlahkan(1)

const hasil = jumlahkan(1,3)+ 3;

console.log(hasil)

// visibilitas varibel

let linux = 'redhad'

function easylinux(){
    linux = 'debian';
    console.log(linux)
}

easylinux()
console.log(linux);

let tinggi = 8;
if (tinggi > 5){
    let lebar = 10;
    console.log(lebar);
}

console.log(tinggi)

// for (let index = 0; index <10; index++)

function lamarKerja(){
    const jabatan = 'programer';
    function orangDalam() {
        let kenalan = `oara dalam bisa memasukan ${jabatan}`;
        console.log(kenalan);
    }

    orangDalam()
}

lamarKerja()


// function perpangkatan (nilai){
//     return nilai + nilai;
// }

// let hasilpangkat = perpangkatan(5);
// console.log(hasilpangkat)

const hasilpangkat = function(nilai){
    return nilai*nilai;
}
hasilpangkat(10)
 console.log(hasilpangkat(19))

// function sebagai argument

function duaKali(func){
    func()
    func()
}

function lemparDadu(){
    const hasil = Math.floor(Math.random()*6) +1;
    console.log(hasil);

}

duaKali(lemparDadu)

function hasilnyaAdalahFunction(){
    const rand = Math.random()
    if(rand > 0.10){
        return function(){
            console.log('selamat angkanya lebih besar')
        }
    }else{
        return function(){
            console.log('maah mungkin bisa coba lagi')
        }
    }
}

const random = hasilnyaAdalahFunction()
random()  // dipanggil dalam bentuk function

// method
const myMath = {//object
    perkalian : function (x,y){// method
        return x*y ;
    },
};

console.log(myMath.perkalian(2,3))

const saya = {

    nama : 'aira',
    hobi : 'mancing',
    kenalan: function(){
        return `hi saya ${this.nama}, hobi saya ${this.hobi}`
    }

}

saya.nama = "de"
saya.hobi = "makan"
console.log(saya.kenalan())

// try and catch

function teriak(msg){
    try{
        console.log(msg.toUpperCase())
    }catch (error){
        // console.log(error)
        console.log('silakan masukan tipe data string')
    }
}

teriak(2)