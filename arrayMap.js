let karyawan = [
    {
        nama: "Harun",
        umur: 23,
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

let namaKaryawanUsia30 = karyawan.map(getNamaKaryawan);

function getNamaKaryawan(element) {
    if (element.umur == 30) {
        return element.nama;
    }
}
console.log(namaKaryawanUsia30);