// Menguji coba koneksi file skrip
console.log("Berkas script.js berhasil terhubung dengan HTML!");


// Eksplorasi Variabel dan Operator Aritmatika
const kkmNilai = 75;
let nilaiUjian = 82;
let selisihSkor = nilaiUjian - kkmNilai;

console.log("Nilai Ujian Masuk:", nilaiUjian);
console.log("Batas Kelulusan (KKM):", kkmNilai);
console.log("Selisih Nilai Ke KKM:", selisihSkor);


// Membuat fungsi penilai dengan percabangan logika
function evaluasiSkor(nama, skor) {
    const batasMinimal = 75;
    let status = "";

    // Logika percabangan mengecek kelulusan
    if (skor >= batasMinimal) {
        status = "Selamat " + nama + ", Anda dinyatakan LULUS mata pelajaran Pemrograman!";
    } else {
        status = "Maaf " + nama + ", Anda Belum Lulus KKM. Silakan mengikuti program Remedial.";
    }

    return status;
}


// Uji coba memanggil fungsi lewat console log
let hasilUji = evaluasiSkor("Rian", 80);
console.log("Hasil Fungsi Test:", hasilUji);


// A. Seleksi elemen DOM masukan dan tombol
const tombolProses = document.getElementById('btn-proses');
const elemenHasil = document.getElementById('box-hasil');


// B. Memasang event listener klik pada tombol proses data nilai
tombolProses.onclick = function() {

    // Mengambil value teks dari input form HTML
    let namaSiswa = document.getElementById('input-nama').value;
    let nilaiSiswa = document.getElementById('input-nilai').value;

    // Validasi sederhana: memastikan kolom input tidak kosong
    if (namaSiswa === "" || nilaiSiswa === "") {

        elemenHasil.innerText =
            "Peringatan: Mohon isi Nama dan Nilai terlebih dahulu!";

        elemenHasil.style.color = "#dc2626";

        return;
    }


    // Konversi tipe data nilai dari String ke Angka (Number)
    let nilaiAngka = Number(nilaiSiswa);


    // Memanggil fungsi logika yang telah dibuat pada Kegiatan 2
    let kalimatKesimpulan =
        evaluasiSkor(namaSiswa, nilaiAngka);


    // C. Manipulasi DOM
    elemenHasil.innerText = kalimatKesimpulan;


    // Memberikan sentuhan warna dinamis berdasarkan kelulusan
    if (nilaiAngka >= 75) {

        elemenHasil.style.color = "#15803d";
        elemenHasil.style.borderLeftColor = "#15803d";

    } else {

        elemenHasil.style.color = "#b91c1c";
        elemenHasil.style.borderLeftColor = "#b91c1c";

    }
};


// ==============================
// DARK MODE
// ==============================

const toggleBtn = document.getElementById('btn-toggle');

toggleBtn.addEventListener('click', function () {

    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {

        toggleBtn.textContent = "Mode Terang";

    } else {

        toggleBtn.textContent = "Mode Gelap";

    }

});


// ==============================
// LOOPING GENERATOR
// ==============================

const tombolLoop = document.getElementById('btn-loop');
const boxLoop = document.getElementById('box-loop');

tombolLoop.onclick = function () {

    let hasilLoop = "";

    for (let i = 1; i <= 5; i++) {

        hasilLoop += "Mencetak Baris Angka ke-" + i + "<br>";

    }

    boxLoop.innerHTML = hasilLoop;

};