let indexIklan = 1;
/*Kode Untuk memanggil fungsi menampilkan silde dengan 
argumen dari nilai variable indexIklan*/
showSlide(indexIklan);

/* Fungsi untuk mengarahkan arah (selanjutnya atau sebelumnya)
pada slide */
function navigate(n) {
    showSlide(indexIklan += n)
}

// Fungsi untuk menampilkan slide 
function showSlide(n) {
    let i = 0;
    let iklanTampil = document.getElementsByClassName("iklan");

    /* Kode untuk mendeklarasikan nilai indexIklan menjadi 1 ketika nilai 
    n melebihi dari banyaknya iklanTampil */
    if (n > iklanTampil.length) {
        indexIklan = 1;
    }
    /* Kode untuk mendeklarasikan nilai indexIklan menjadi nilai banyaknya 
    (panjang) iklanTampil */
    if (n < 1) {
        indexIklan = iklanTampil.length;
    }
    /* Kode untuk mengatur nilai properti display pada semua index iklanTampil  
    menjadi 'none' agar isinya tidak ditampilkan di layar*/
    for (i; i < iklanTampil.length; i++) {
        iklanTampil[i].style.display = "none";
    }
    /* Kode untuk meng-override nilai properti display pada index ke indexIklan - 1 
    (karena index dimulai dari 0) menjadi 'block' supaya bisa ditampilkan 
    pada layar */
    iklanTampil[indexIklan - 1].style.display = "block";
}