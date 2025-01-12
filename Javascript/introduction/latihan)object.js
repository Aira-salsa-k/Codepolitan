// struktur data object
// key dan value
// di akses dengan custom keys

const fitnessData = {
    totalSteps : 123345,
    totalMiles : 349.3,
    avgCaloriesburn : 38494,
}   //key             //value

console.log(fitnessData.totalMiles)
const orang = {
    nama : 'aira',
    tanggal : 2022,
    alamat : 'jayapura',
}

orang['nama'] ='de'
orang.tanggal = 2
orang.gender = 'woman'

let alamat = 'alamat'
console.log(alamat)
console.log(orang['nama'])
// idealnya meamnggil data
console.log(orang)
orang['nama']
const barang = {

    judul : 'sepatu',
    harga : 3000,
    isReady : true,
    size  : ['30','39','40'],
    location : {
        indonesia : 34,
        singapure : 20
    }
}
console.log(barang['is' + 'Ready'])
console.log(barang.size[2])

////array + objext
const shoppingCart = [
    {
        product:'vue.js',
        price:1.22,
        quantity: 3
    },

    {
        product:'react.js',
        price:2.31,
        quantity: 1
    },

    {
        product:'angular.js',
        price:3.23,
        quantity: 2
    },
]
console.log(shoppingCart[1].price);