let canvas = $("#areaJuego");
let ctx = canvas.getContext("2d");

class Entidad {
    constructor(ancho, altura, x = 0, y = 0) {
        this.ancho = ancho;
        this.altura = altura;
        this.x = x;
        this.y = y;
    }

    tocaA(otra) {
        return colRectRect(
            { x: this.x, y: this.y, w: this.ancho, h: this.altura },
            { x: otra.x, y: otra.y, w: otra.ancho, h: otra.altura }
        );
    }
}

const SUELO = new Entidad(canvas.width, 40, 0, canvas.height - 40);
const PERSONAJE = new Entidad(40, 60, canvas.width / 2 - 20, canvas.height - 40 - 60);
const LIMON = new Entidad(20, 20, canvas.width / 2 - 10, 0);

let puntaje = 0;
let vidas = 3;
let velocidadCaida = 200;
let intervalo;

function actualizarPantalla() {
    limpiarCanvas(ctx);
    ctxColor(ctx, "green");
    dibujarRect(ctx, SUELO.x, SUELO.y, SUELO.ancho, SUELO.altura);

    ctxColor(ctx, "#fbc18c");
    dibujarRect(ctx, PERSONAJE.x, PERSONAJE.y, PERSONAJE.ancho, PERSONAJE.altura);

    ctxColor(ctx, "yellow");
    dibujarRect(ctx, LIMON.x, LIMON.y, LIMON.ancho, LIMON.altura);

    detectarColisiones();
}

function moverIzquierda() {
    PERSONAJE.x -= 20;
    actualizarPantalla();
}

function moverDerecha() {
    PERSONAJE.x += 20;
    actualizarPantalla();
}

function bajarLimon() {
    LIMON.y += 20;
    actualizarPantalla();
}

function aparecerLimon() {
    LIMON.x = enteroAleatorio(0, canvas.width - LIMON.ancho);
    LIMON.y = 0;
    actualizarPantalla();
}

function detectarColisiones() {
    if (LIMON.tocaA(PERSONAJE)) {
        puntaje++;
        sonidoClick();
        texto($("#txtPuntaje"), puntaje);

        if (puntaje >= 3) velocidadCaida = 150;
        if (puntaje >= 6) velocidadCaida = 100;

        if (puntaje >= 10) {
            vibrarExito();
            alert(`¡Felicidades! Has ganado con ${vidas} vidas restantes.`);
            detenerIntervalo(intervalo);
            reiniciarJuego();
        }
        aparecerLimon();
    }

    if (LIMON.tocaA(SUELO)) {
        vidas--;
        beep(200, 0.1, 'sawtooth');
        texto($("#txtVidas"), vidas);

        if (vidas === 0) {
            alert(`¡Juego Terminado! Tu puntaje final es: ${puntaje}`);
            detenerIntervalo(intervalo);
            reiniciarJuego();
        }
        aparecerLimon();
    }
}

function reiniciarJuego() {
    puntaje = 0;
    vidas = 3;
    velocidadCaida = 200;
    PERSONAJE.x = canvas.width / 2 - PERSONAJE.ancho / 2;
    texto($("#txtPuntaje"), puntaje);
    texto($("#txtVidas"), vidas);
    iniciarJuego();
}

function iniciarJuego() {
    if (intervalo) detenerIntervalo(intervalo);
    intervalo = setInterval(bajarLimon, velocidadCaida);
    actualizarPantalla();
    aparecerLimon();
}