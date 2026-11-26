const btnToggle = document.getElementById('themeToggleBtn');
const body = document.body;

// Cek apakah preferensi sistem perangkat pengguna menggunakan Dark Mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Inisialisasi awal berdasarkan preferensi sistem
if (prefersDark) {
    body.classList.add('dark-theme');
    btnToggle.textContent = "Switch to Light Mode";
}

// Event listener saat tombol diklik
btnToggle.addEventListener('click', () => {
    // Membalik (toggle) class dark-theme pada body
    body.classList.toggle('dark-theme');

// Ubah teks tombol sesuai dengan state saat ini
if (body.classList.contains('dark-theme')) {
    btnToggle.textContent = "Switch to Light Mode";
    } else {
    btnToggle.textContent = "Switch to Dark Mode";
    }
});

// ==================================================
// IMPLEMENTASI PERULANGAN LOGIKA (LOOPING)
// ==================================================
const tombolLoop = document.getElementById('btn-loop');
const elemenBoxLoop = document.getElementById('box-loop');

tombolLoop.onclick = function() {
  let penampungTeks = "";

  // Logika perulangan mencetak deret angka dari 1 sampai 5
  for (let i = 1; i <= 5; i++) {
    penampungTeks += "Mencetak Baris Angka ke-" + i + "<br>";
  }

  // Manipulasi DOM menyuntikkan teks berupa format HTML tag break
  elemenBoxLoop.innerHTML = penampungTeks;
  elemenBoxLoop.style.fontStyle = "normal";
};

// ==================================================
// IMPLEMENTASI DARK MODE TOGGLE
// ==================================================
const tombolTema = document.getElementById('btn-toggle');

tombolTema.onclick = function() {
  // Menambahkan atau menghapus class 'dark-theme' pada elemen <body> secara bergantian
  document.body.classList.toggle('dark-theme');
}
  // Memeriksa apakah class 'dark-theme' saat ini sedang aktif atau tidak
  if (document.body.classList.contains('dark-theme')) {
    tombolTema.innerText = "Mode Terang";
    tombolTema.style.backgroundColor = "#e2e8f0";
    tombolTema.style.color = "#1e293b";
  } else {
    tombolTema.innerText = "Mode Gelap";
    tombolTema.style.backgroundColor = "#334155";
    tombolTema.style.color = "#ffffff";
  }