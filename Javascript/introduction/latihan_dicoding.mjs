/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */
function findIndex(array, number){
    const array1 = array;
    const index = array1.findIndex(x => (x === number));
    if (index !== -1){
        console.log(number-1)
    }else{
        console.log(-1)
    }
}
    findIndex([1, 2, 3, 4, 5], 3) // output: 2
    findIndex([1, 2, 3, 4, 5], 6) // output: -1
    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 
// Tulis kode di bawah ini
function minimal(a, b){
    if (a<b){
        console.log(a)
    }else{
        console.log(b)
    }
}
// minimal(1,4);
// minimal(3,2);
// minimal(3, 3);
// Output: 3
export function temukanaku(array, number){
    for(let i =0; i< array.length; i++){
        if(array[i] === number){
            return i;   
        }
    }
    return -1;
}
console.log(temukanaku([1, 2, 3, 4, 5], 3)); // output: 2
console.log(temukanaku([1, 2, 3, 4, 5], 6)); // output: -1
console.log(temukanaku([1, 2, 3, 4, 5], 5));  

const restaurant = {
    'name' : 'Bakso Mang dicoding',
    'city' : 'Bandung',
    'favorite_drink' : 'esteh',
    'favorite food' : 'bakso',
    'isVegan' : false
};

const nama_resto = restaurant["favorite food"];
console.log(nama_resto);

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai "Bakso Mang Dicoding".
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai "Bandung".
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai "Es Teh".
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai "Bakso".
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai false.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

