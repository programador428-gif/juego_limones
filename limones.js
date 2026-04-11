let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTURA_SUELO = 40;
const ALTURA_PERSONAJE = 60;
const ANCHO_PERSONAJE = 40;
const ALTO_LIMON = 20;
const ANCHO_LIMON = 20;

let personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
let personajeY = canvas.height - ALTURA_SUELO - ALTURA_PERSONAJE;
let limonX = canvas.width / 2 - ANCHO_LIMON / 2;
let limonY = 0;
let puntaje = 0;
let vidas = 3;
let velocidadCaida = 200;

/* --Funciones en General-- */

// Funciones para dibujar en el canvas

function dibujarSuelo() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - ALTURA_SUELO, canvas.width, ALTURA_SUELO);
}

function dibujarPersonaje() {
    ctx.fillStyle = "#fbc18c";
    ctx.fillRect(personajeX, personajeY, ANCHO_PERSONAJE, ALTURA_PERSONAJE);
}

function dibujarLimon() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(limonX, limonY, ANCHO_LIMON, ALTO_LIMON);
}

function borrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Funciones para mover los elementos

function moverIzquierda() {
    personajeX -= 20;
    actualizarPantalla();
}

function moverDerecha() {
    personajeX += 20;
    actualizarPantalla();
}

function bajarLimon() {
    limonY += 20;
    actualizarPantalla();
}

function actualizarPantalla() {
    borrarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    detectarColisiones();
}

// Funcion para detectar colisiones

function detectarColisiones() {
    // Colision entre el limon y el personaje
    if (
        limonX + ANCHO_LIMON > personajeX &&
        limonX < personajeX + ANCHO_PERSONAJE &&
        limonY + ALTO_LIMON > personajeY &&
        limonY < personajeY + ALTURA_PERSONAJE
    ) {
        puntaje++;
        mostrarMensajeSpan("txtPuntaje", puntaje);
        if (puntaje >= 3) {
            velocidadCaida = 150;
        }
        if (puntaje >= 6) {
            velocidadCaida = 100;
        }
        if (puntaje >= 10) {
            alert("¡Felicidades! Has ganado el juego");
            reiniciarJuego();
        }
        aparecerLimon();
    }
    // Colision entre el limon y el suelo
    if ( // Agregue aqui mismo ya que se ahorra codigo ;)
        limonY + ALTO_LIMON > canvas.height - ALTURA_SUELO
    ) {
        vidas--;
        mostrarMensajeSpan("txtVidas", vidas);
        if (vidas === 0) {
            alert("¡Juego Terminado! Tu puntaje final es: " + puntaje);
            reiniciarJuego();
        }
        aparecerLimon();
    }
}

function aparecerLimon() {
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}

// Funcion para empezar o reiniciar el juego
function reiniciarJuego() {
    puntaje = 0;
    vidas = 3;
    velocidadCaida = 200;
    mostrarMensajeSpan("txtPuntaje", puntaje);
    mostrarMensajeSpan("txtVidas", vidas);
    iniciarJuego();
}

function iniciarJuego() {
    setInterval(
        bajarLimon
        , velocidadCaida
    )
    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
    dibujarLimon();
}