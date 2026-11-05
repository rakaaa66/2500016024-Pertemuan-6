
const warnabackground = ["#000000", "#ff0303", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
const warnatext = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
    document.body.style.backgroundColor = warnabackground[Math.floor(Math.random() * warnabackground.length)];
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
    document.body.style.color = warnatext[Math.floor(Math.random() * warnatext.length)];
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 1) + "px";
};

let outputDiv = document.getElementById("output3");
outputDiv.appendChild(btnBackground);
outputDiv.appendChild(btnTextColor);
outputDiv.appendChild(btnIncreaseFont);