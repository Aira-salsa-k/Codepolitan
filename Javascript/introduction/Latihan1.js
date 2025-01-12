// array
let warna = ['hijau', 'kuning','merah'];

console.log(warna[2])
let playlist = ['opic','aira']

playlist[2]='nana';
playlist.push('itaiwa')
playlist.unshift('rara')
playlist.shift()
playlist.pop()
console.log(playlist)

const gabungan = warna.concat(playlist);
console.log(gabungan)
// gabungan.splice(1,0 ,'indeks 1 baru')
gabungan.splice(2,3,'indeks 1 baru')

console.log(gabungan)
console.log(gabungan.slice(2))
console.log(gabungan.join("-"))
// index of

console.log(playlist.indexOf('rai'))
console.log(playlist.includes('rara'))

const kumpulanWarna = ['merah','kuning','hijau'];
kumpulanWarna.push('biru')
console.log(kumpulanWarna)

// nested array
const board = [
    [null,null,'0'],
    ['X','o',null],
    ['o',null,'X']
]

console.log(board[0][0])

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * 
**/
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// Tulis kode di bawah ini
const TopSeller = books.filter((books) => books.sales<1000000).map((books) => { return `${books.author} adalah penulis buku ${books.title} yang  hebat`});
console.log(TopSeller);