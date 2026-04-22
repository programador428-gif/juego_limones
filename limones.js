// CONFIGURACIÓN Y VARIABLES GLOBALES
let canvas = $("areaJuego");
let ctx = canvas.getContext("2d");

class Entidad {
    constructor(ancho, altura, x = 0, y = 0) {
        this.ancho = ancho;
        this.altura = altura;
        this.x = x;
        this.y = y;
    }
}

const SUELO = new Entidad(canvas.width, 40);
const PERSONAJE = new Entidad(
    40,
    60,
    canvas.width / 2 - 40 / 2,
    canvas.height - SUELO.altura - 60
);

const LIMON = new Entidad(
    20,
    20,
    canvas.width / 2 - 20 / 2,
    0
);


let puntaje = 0;
let vidas = 3;
let velocidadCaida = 200;
let intervalo;

// FUNCIONES DE DIBUJO
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

function actualizarPantalla() {
    borrarCanvas();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    detectarColisiones();
}

// FUNCIONES DE MOVIMIENTO Y LÓGICA
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

function aparecerLimon() {
    limonX = generarAleatorio(0, canvas.width - ANCHO_LIMON);
    limonY = 0;
    actualizarPantalla();
}

// SISTEMA DE COLISIONES Y ESTADO DEL JUEGO

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

        // Dificultad incremental
        if (puntaje >= 3) velocidadCaida = 150;
        if (puntaje >= 6) velocidadCaida = 100;

        if (puntaje >= 10) {
            alert(`¡Felicidades! Has ganado con ${vidas} vidas restantes.`);
            clearInterval(intervalo);
            reiniciarJuego();
        }
        aparecerLimon();
    }

    // Colision entre el limon y el suelo
    if (limonY + ALTO_LIMON > canvas.height - ALTURA_SUELO) {
        vidas--;
        mostrarMensajeSpan("txtVidas", vidas);

        if (vidas === 0) {
            alert(`¡Juego Terminado! Tu puntaje final es: ${puntaje}`);
            clearInterval(intervalo);
            reiniciarJuego();
        }
        aparecerLimon();
    }
}

// INICIO Y REINICIO DEL JUEGO

function reiniciarJuego() {
    puntaje = 0;
    vidas = 3;
    velocidadCaida = 200;
    personajeX = canvas.width / 2 - ANCHO_PERSONAJE / 2;
    mostrarMensajeSpan("txtPuntaje", puntaje);
    mostrarMensajeSpan("txtVidas", vidas);
    iniciarJuego();
}

function iniciarJuego() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(bajarLimon, velocidadCaida);

    dibujarSuelo();
    dibujarPersonaje();
    aparecerLimon();
}