// FILTER PRODUK
function filterProduk(kategori) {

    // Mengambil semua produk
    const produk = document.querySelectorAll(".product-item");

    // Mengambil semua tombol kategori
    const tombolKategori = document.querySelectorAll(".category-btn");


    // Mengatur tombol aktif
    tombolKategori.forEach(function(tombol) {
        tombol.classList.remove("active");
    });


    // Menampilkan produk sesuai kategori
    produk.forEach(function(item) {

        if (
            kategori === "semua" ||
            item.getAttribute("data-kategori") === kategori
        ) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });


    // Mencari tombol yang sesuai
    tombolKategori.forEach(function(tombol) {

        if (
            tombol.innerText.toLowerCase().includes(kategori)
        ) {
            tombol.classList.add("active");
        }

    });

}


// ==============================
// KERANJANG BELANJA
// ==============================

let totalHarga = 0;
let jumlahProduk = 0;


// Fungsi menambahkan produk
function tambahKeranjang(harga, namaProduk) {

    totalHarga = totalHarga + harga;
    jumlahProduk = jumlahProduk + 1;


    // Mengubah tampilan total
    document.getElementById("total-harga").innerText =
        "Rp" + totalHarga.toLocaleString("id-ID");


    // Mengubah pesan keranjang
    document.getElementById("cart-message").innerText =
        jumlahProduk + " produk dipilih. Produk terakhir: " + namaProduk;


    alert(namaProduk + " berhasil ditambahkan ke keranjang! 🎀");
}


// ==============================
// CHECKOUT
// ==============================

function checkout() {

    if (jumlahProduk === 0) {

        alert("Keranjang kamu masih kosong! 🥺");

    } else {

        alert(
            "Checkout berhasil! Total belanja kamu Rp" +
            totalHarga.toLocaleString("id-ID") +
            " 💗"
        );

    }

}