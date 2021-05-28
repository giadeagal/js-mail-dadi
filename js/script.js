var player =  Math.floor(Math.random() * 6) + 1;
var pc = Math.floor(Math.random() * 6) + 1;

document.getElementById("printer").innerHTML = "Hai vinto!"

if (player == pc) {
    document.getElementById("printer").innerHTML = "Siamo pari";
} else if (player < pc) {
    document.getElementById("printer").innerHTML = "Hai perso"
}