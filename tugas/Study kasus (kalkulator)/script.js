// Mengambil referensi elemen dari HTML
const inputAngka1 = document.getElementById("angka1");
const inputAngka2 = document.getElementById("angka2");
const elemenHasil = document.getElementById("hasil");

function dapatkanNilai() {
    const nilai1 = parseFloat(inputAngka1.value);
    const nilai2 = parseFloat(inputAngka2.value);
    
    if (isNaN(nilai1) || isNaN(nilai2)) {
        alert("Silakan masukkan kedua angka terlebih dahulu.");
        return null; 
    }
    return { nilai1, nilai2 };
}

document.getElementById("btn-tambah").onclick = function() {
    const angka = dapatkanNilai();
    if (angka) elemenHasil.textContent = angka.nilai1 + angka.nilai2;
};

document.getElementById("btn-kurang").onclick = function() {
    const angka = dapatkanNilai();
    if (angka) elemenHasil.textContent = angka.nilai1 - angka.nilai2;
};

document.getElementById("btn-kali").onclick = function() {
    const angka = dapatkanNilai();
    if (angka) elemenHasil.textContent = angka.nilai1 * angka.nilai2;
};

document.getElementById("btn-bagi").onclick = function() {
    const angka = dapatkanNilai();
    if (angka) {
        if (angka.nilai2 === 0) {
            elemenHasil.textContent = "Error: Bagi 0";
        } else {
            elemenHasil.textContent = angka.nilai1 / angka.nilai2;
        }
    }
};