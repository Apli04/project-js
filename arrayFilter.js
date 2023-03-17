let karyawan = [
    {
        nama: "Harun",
        umur: 30,
    },
    {
        nama: "Apli",
        umur: 22,
    },
    {
        nama: "Marni",
        umur: 20,
    },
    {
        nama: "Yanto",
        umur: 30,
    },
];
console.log(karyawan);

let namaKaryawanUsia30 = karyawan.filter(getNamaKaryawan);

function getNamaKaryawan(element, index, array) {
    return element.umur == 30;
}
console.log(namaKaryawanUsia30);