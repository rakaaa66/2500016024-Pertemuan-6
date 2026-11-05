let nama = "John Doe";
let umur = 25;
let statusMenikah = false;

console.log("Nama: " + nama);
console.log("Umur: " + umur);
console.log("Status Menikah: " + statusMenikah);

document.getElementById("nama").innerText = "Nama: " + nama;
document.getElementById("umur").innerText = "Umur: " + umur;
document.getElementById("statusMenikah").innerText = "Status Menikah: " + (statusMenikah ? "Sudah Menikah" : "Belum Menikah");