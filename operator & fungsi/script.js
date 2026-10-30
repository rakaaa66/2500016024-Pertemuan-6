function hitungKeliling(panjang, lebar) {
    return 2 * (panjang + lebar);
}

let keliling = hitungKeliling(10, 20);
document.getElementById("keliling").innerText = keliling;
