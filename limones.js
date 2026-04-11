let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let personajeX = canvas.width / 2;
let limonX = canvas.width / 2;
let limonY = 5;

const ALTURA_SUELO = 40;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ALTO_LIMON = 20;
const ANCHO_LIMON = 20;

/* --Funciones en General-- */

// Funciones para dibujar en el canvas

function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "#fbc18c";
    ctx.fillRect(personajeX - ANCHO_PERSONAJE / 2, canvas.height - ALTURA_PERSONAJE - ALTURA_SUELO, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function dibujarLimon() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(limonX - ANCHO_LIMON / 2, limonY, ANCHO_LIMON, ALTO_LIMON);
}

function borrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Funciones para mover los elementos

function moverIzquierda() {
    personajeX -= 10;
    actualizarPantalla();
}

function moverDerecha() {
    personajeX += 10;
    actualizarPantalla();
}

function bajarLimon() {
    limonY += 30;
    actualizarPantalla();
}

function actualizarPantalla() {
    borrarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}

// Funcion para empezar el juego
function iniciarJuego() {
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}