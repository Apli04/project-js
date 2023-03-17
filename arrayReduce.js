let nilaiMahasiswa = [90, 87, 67, 86, 90, 56];

let jumlahNilai = nilaiMahasiswa.reduce(hitungPenjumlahan);

function hitungPenjumlahan(total, element, index, array) {
    return total + element;
}
console.log(jumlahNilai);