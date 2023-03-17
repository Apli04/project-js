// // global scope

// function salam() {
//     // local scope/ block scope
//     // function yang tidak mengembalikan nilai disebut void function
//     alert(`Selamat datang`);

// }
// function hitungLuas() {
//     // return function
//     let panjang = 10;
//     let lebar = 5;

//     let luas = panjang * lebar;
//     return luas;
// }

// // global scope

// function salam() {
// }
// function hitungLuas() {
// }

// // parameter/argument
// function tambah(bilA, bilB, bilC) {
//     return bilA + bilB + bilC;
// }
// function SelamatDatang(nama) {
//     alert('selamat datang ' + nama);
// }

// SelamatDatang('Harun');
// salam();
// let luas = hitungLuas();
// console.log(luas);

// let hasil = tambah(10, 20, 30);
// alert(hasil);

// // function Expression

// function salam() {
//     console.log('Hello');
// }

// let salam = function () {
//     console.log('Hello', nama);
// }
// salam('Apli');

// arrow function

let salam = (nama) => {
    console.log("Halo", nama);
}
salam("Apli");