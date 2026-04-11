let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTURASUELO = 40;
const ALTURAPERSONAJE = 60;
const ANCHOPERSONAJE = 40;
function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURASUELO, canvas.width, ALTURASUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "#fbc18c";
    ctx.fillRect((canvas.width / 2) - (ANCHOPERSONAJE / 2), canvas.height - ALTURAPERSONAJE - ALTURASUELO, ANCHOPERSONAJE, ALTURAPERSONAJE);
}

function iniciarJuego() {
    dibujarSuelo();
    dibujarPersonaje();
}