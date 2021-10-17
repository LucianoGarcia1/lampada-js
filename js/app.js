const BtnOn = document.getElementById("on");
const BtnOff = document.getElementById("off");
const img = document.getElementById("imagem");


function LampON() {
    img.src = "acesa.gif"
}

BtnOn.addEventListener("click", LampON);


function LampOff() {
    img.src = "apagada.gif"
}


BtnOff.addEventListener("click", LampOff);


function dbClica() {
    img.src = "quebrada.jpg"
}

BtnOn.addEventListener("dblclick", dbClica)