let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let personajeX = canvas.width / 2;

const ALTURASUELO = 40;
const ALTURAPERSONAJE = 60;
const ANCHOPERSONAJE = 40;

// Funciones
function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURASUELO, canvas.width, ALTURASUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "#fbc18c";
    ctx.fillRect((personajeX) - (ANCHOPERSONAJE / 2), canvas.height - ALTURAPERSONAJE - ALTURASUELO, ANCHOPERSONAJE, ALTURAPERSONAJE);
}

function borrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    personajeX -= 10;
    actualizarJuego();
}

function actualizarJuego() {
    borrarCanvas();
    dibujarPersonaje();
    dibujarSuelo();
}
// Funcion para empezar el juego
function iniciarJuego() {
    dibujarSuelo();
    dibujarPersonaje();
}