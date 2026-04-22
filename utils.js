// Utils de Dilan Solorzano

// ==================================
//   Aritmética Básica y Utilidades
// ==================================

const sumar = (...nums) => nums.flat().reduce((acc, n) => acc + n, 0);
const restar = (...nums) => nums.flat().reduce((acc, n) => acc - n);
const multiplicar = (...nums) => nums.flat().reduce((acc, n) => acc * n);
const dividir = (...nums) => nums.flat().reduce((acc, n) => acc / n);
const modulo = (a, b) => a % b;
const esPar = (n) => n % 2 === 0;
const esImpar = (n) => n % 2 !== 0;
const valorAbsoluto = (n) => Math.abs(n);
const signo = (n) => Math.sign(n);
const inversoAditivo = (n) => -n;
const inversoMultiplicativo = (n) => 1 / n;

// ===========================
//   Estadística y Conjuntos
// ===========================

const maximo = (...nums) => Math.max(...nums.flat());
const minimo = (...nums) => Math.min(...nums.flat());
const promedio = (arr) => sumar(arr) / arr.length;
const rango = (arr) => maximo(arr) - minimo(arr);
const mediana = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const m = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? (s[m - 1] + s[m]) / 2 : s[m];
};
const porcentaje = (parte, total) => (parte / total) * 100;
const valorDelPorcentaje = (porcentaje, total) => (porcentaje / 100) * total;

// ==============================
//   Exponenciales y Logaritmos
// ==============================

const potencia = (base, exp) => Math.pow(base, exp);
const cuadrado = (n) => Math.pow(n, 2);
const cubo = (n) => Math.pow(n, 3);
const raizCuadrada = (n) => Math.sqrt(n);
const raizCubica = (n) => Math.cbrt(n);
const raizEnesima = (x, n) => Math.pow(x, 1 / n);
const expNatural = (n) => Math.exp(n); // e^x
const logNatural = (n) => Math.log(n); // ln(x)
const logBase10 = (n) => Math.log10(n);
const logBase2 = (n) => Math.log2(n);
const logBaseN = (n, base) => Math.log(n) / Math.log(base);

// ============================
//   Trigonometría (Radianes)
// ============================

const pi = () => Math.PI;
const seno = (rad) => Math.sin(rad);
const coseno = (rad) => Math.cos(rad);
const tangente = (rad) => Math.tan(rad);
const arcoSeno = (x) => Math.asin(x);
const arcoCoseno = (x) => Math.acos(x);
const arcoTangente = (x) => Math.atan(x);
const arcoTangente2 = (y, x) => Math.atan2(y, x);
const secante = (rad) => 1 / Math.cos(rad);
const cosecante = (rad) => 1 / Math.sin(rad);
const cotangente = (rad) => 1 / Math.tan(rad);
const senoHiperbolico = (x) => Math.sinh(x);
const cosenoHiperbolico = (x) => Math.cosh(x);
const tangenteHiperbolica = (x) => Math.tanh(x);

// ================================
//   Conversiones Trigonométricas
// ================================

const gradosARadianes = (grados) => grados * (Math.PI / 180);
const radianesAGrados = (radianes) => radianes * (180 / Math.PI);
const senoGrados = (deg) => Math.sin(gradosARadianes(deg));
const cosenoGrados = (deg) => Math.cos(gradosARadianes(deg));
const tangenteGrados = (deg) => Math.tan(gradosARadianes(deg));

// ========================
//   Álgebra y Polinomios
// ========================

const discriminanteCuadratico = (a, b, c) => cuadrado(b) - (4 * a * c);
const raizCuadraticaPos = (a, b, c) => (-b + raizCuadrada(discriminanteCuadratico(a, b, c))) / (2 * a);
const raizCuadraticaNeg = (a, b, c) => (-b - raizCuadrada(discriminanteCuadratico(a, b, c))) / (2 * a);
const funcionLineal = (m, x, b) => (m * x) + b;
const funcionCuadratica = (a, b, c, x) => (a * cuadrado(x)) + (b * x) + c;
const funcionCubica = (a, b, c, d, x) => (a * cubo(x)) + (b * cuadrado(x)) + (c * x) + d;
const funcionRacional = (numerador, denominador) => denominador !== 0 ? numerador / denominador : NaN;
const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

// ==========================
//   Geometría - Áreas (2D)
// ==========================

const areaCuadrado = (lado) => cuadrado(lado);
const areaRectangulo = (base, altura) => base * altura;
const areaTriangulo = (base, altura) => (base * altura) / 2;
const areaCirculo = (radio) => Math.PI * cuadrado(radio);
const areaRombo = (dMayor, dMenor) => (dMayor * dMenor) / 2;
const areaTrapecio = (B, b, h) => ((B + b) * h) / 2;
const areaPoligonoRegular = (perimetro, apotema) => (perimetro * apotema) / 2;
const areaElipse = (r1, r2) => Math.PI * r1 * r2;

// ===============================
//   Geometría - Perímetros (2D)
// ===============================

const perimetroCuadrado = (lado) => lado * 4;
const perimetroRectangulo = (base, altura) => 2 * (base + altura);
const perimetroTriangulo = (l1, l2, l3) => l1 + l2 + l3;
const circunferencia = (radio) => 2 * Math.PI * radio;
const perimetroPoligono = (lado, nLados) => lado * nLados;
const hipotenusa = (cateto1, cateto2) => Math.hypot(cateto1, cateto2);

// ==============================
//   Geometría - Volúmenes (3D)
// ==============================

const volumenCubo = (lado) => cubo(lado);
const volumenPrisma = (areaBase, altura) => areaBase * altura;
const volumenCilindro = (radio, altura) => Math.PI * cuadrado(radio) * altura;
const volumenEsfera = (radio) => (4 / 3) * Math.PI * cubo(radio);
const volumenCono = (radio, altura) => (Math.PI * cuadrado(radio) * altura) / 3;
const volumenPiramide = (areaBase, altura) => (areaBase * altura) / 3;

// ====================================
//   Control de Rangos y Aleatoriedad
// ====================================

const redondear = (n) => Math.round(n);
const redondearArriba = (n) => Math.ceil(n);
const redondearAbajo = (n) => Math.floor(n);
const truncar = (n) => Math.trunc(n);
const aleatorioDecimal = () => Math.random();
const aleatorioEntre = (min, max) => Math.random() * (max - min) + min;
const enteroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const limitarRango = (n, min, max) => Math.min(Math.max(n, min), max);
const interpolar = (inicio, fin, t) => inicio * (1 - t) + fin * t; // Lerp
const mapearRango = (x, inMin, inMax, outMin, outMax) => ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

// ============================
//   Conversiones de Unidades
// ============================

const celsiusAFahrenheit = (c) => (c * 9 / 5) + 32;
const fahrenheitACelsius = (f) => (f - 32) * 5 / 9;
const kmAMillas = (km) => km * 0.621371;
const millasAKm = (m) => m * 1.60934;
const kgALibras = (kg) => kg * 2.20462;
const librasAKg = (lb) => lb / 2.20462;
const metrosAPies = (m) => m * 3.28084;
const piesAMetros = (ft) => ft / 3.28084;
const litrosAGalones = (l) => l * 0.264172;
const galonesALitros = (g) => g / 0.264172;

// ==================================
//   Física - Cinemática y Dinámica
// ==================================

const velocidad = (distancia, tiempo) => distancia / tiempo;
const aceleracion = (vFinal, vInicial, tiempo) => (vFinal - vInicial) / tiempo;
const fuerza = (masa, aceleracion) => masa * aceleracion;
const peso = (masa, gravedad = 9.81) => masa * gravedad;
const trabajo = (fuerza, distancia, angulo = 0) => fuerza * distancia * Math.cos(angulo);
const potenciaMecanica = (trabajo, tiempo) => trabajo / tiempo;
const energiaCinetica = (masa, velocidad) => 0.5 * masa * Math.pow(velocidad, 2);
const energiaPotencial = (masa, altura, gravedad = 9.81) => masa * gravedad * altura;
const momentoLineal = (masa, velocidad) => masa * velocidad;
const impulso = (fuerza, tiempo) => fuerza * tiempo;
const densidad = (masa, volumen) => masa / volumen;
const presion = (fuerza, area) => fuerza / area;
const presionHidrostatica = (densidad, altura, gravedad = 9.81) => densidad * gravedad * altura;
const fuerzaFriccion = (coeficiente, normal) => coeficiente * normal;
const leyGravitacion = (m1, m2, d, G = 6.674e-11) => G * ((m1 * m2) / Math.pow(d, 2));
const caidaLibreVelocidad = (tiempo, g = 9.81) => g * tiempo;
const caidaLibreDistancia = (tiempo, g = 9.81) => 0.5 * g * Math.pow(tiempo, 2);

// =========================================
//   Física - Electricidad y Termodinámica
// =========================================

const voltaje = (corriente, resistencia) => corriente * resistencia; // Ley de Ohm
const corriente = (voltaje, resistencia) => voltaje / resistencia;
const resistencia = (voltaje, corriente) => voltaje / corriente;
const potenciaElectrica = (voltaje, corriente) => voltaje * corriente;
const energiaElectrica = (potencia, tiempo) => potencia * tiempo;
const resistenciaSerie = (...res) => res.flat().reduce((acc, r) => acc + r, 0);
const resistenciaParalelo = (...res) => 1 / res.flat().reduce((acc, r) => acc + (1 / r), 0);
const calor = (masa, calorEspecifico, deltaT) => masa * calorEspecifico * deltaT;
const capacidadCalorifica = (calor, deltaT) => calor / deltaT;
const dilatacionLineal = (longitud, coef, deltaT) => longitud * coef * deltaT;

// ====================================
//   Química - Estequiometría y Gases
// ====================================

const moles = (masa, masaMolar) => masa / masaMolar;
const masaSoluto = (moles, masaMolar) => moles * masaMolar;
const molaridad = (moles, litrosSolucion) => moles / litrosSolucion;
const molalidad = (moles, kgSolvente) => moles / kgSolvente;
const normalidad = (molaridad, equivalentes) => molaridad * equivalentes;
const fraccionMolar = (molesSustancia, molesTotales) => molesSustancia / molesTotales;
const gasesIdealesPresion = (n, v, t, r = 0.0821) => (n * r * t) / v;
const gasesIdealesVolumen = (n, p, t, r = 0.0821) => (n * r * t) / p;
const gasesIdealesTemperatura = (p, v, n, r = 0.0821) => (p * v) / (n * r);
const kelvinACelsius = (k) => k - 273.15;
const celsiusAKelvin = (c) => c + 273.15;
const calculoPH = (concentracionH) => -Math.log10(concentracionH);
const calculoPOH = (concentracionOH) => -Math.log10(concentracionOH);
const phDesdePOH = (pOH) => 14 - pOH;
const densidadGas = (presion, masaMolar, t, r = 0.0821) => (presion * masaMolar) / (r * t);
const dilucionVolumenFinal = (c1, v1, c2) => (c1 * v1) / c2;
const dilucionConcentracionFinal = (c1, v1, v2) => (c1 * v1) / v2;

// ========================
//   Biología y Biofísica
// ========================

const imc = (pesoKg, alturaM) => pesoKg / Math.pow(alturaM, 2);
const metabolismoBasalHombres = (peso, alturaCm, edad) => 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * edad);
const metabolismoBasalMujeres = (peso, alturaCm, edad) => 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * edad);
const crecimientoPoblacional = (pobInicial, tasaCrecimiento, tiempo) => pobInicial * Math.exp(tasaCrecimiento * tiempo);
const tasaNatalidad = (nacimientos, poblacion) => (nacimientos / poblacion) * 1000;
const tasaMortalidad = (muertes, poblacion) => (muertes / poblacion) * 1000;
const gastoCardiaco = (volumenSistolico, frecuenciaCardiaca) => volumenSistolico * frecuenciaCardiaca;
const presionArterialMedia = (sistolica, diastolica) => diastolica + ((sistolica - diastolica) / 3);
const ventilacionAlveolar = (volumenCorriente, espacioMuerto, freqResp) => (volumenCorriente - espacioMuerto) * freqResp;
const proporcionGenetica = (casosFavorables, totalCasos) => (casosFavorables / totalCasos) * 100;

// ================================================
//   Manipulación del DOM (Tu propio Mini-jQuery)
// ================================================

// Selectores
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Creación y Eliminación
const crearElemento = (etiqueta) => document.createElement(etiqueta);
const agregarHijo = (padre, hijo) => padre.appendChild(hijo);
const removerElemento = (el) => el.remove();
const vaciarElemento = (el) => el.innerHTML = '';

// Clases
const agregarClase = (el, clase) => el.classList.add(clase);
const removerClase = (el, clase) => el.classList.remove(clase);
const alternarClase = (el, clase) => el.classList.toggle(clase);
const tieneClase = (el, clase) => el.classList.contains(clase);

// Eventos
const evento = (el, tipo, cb) => el.addEventListener(tipo, cb);
const removerEvento = (el, tipo, cb) => el.removeEventListener(tipo, cb);
const onReady = (cb) => document.addEventListener('DOMContentLoaded', cb);

// Contenido y Atributos
const texto = (el, txt) => txt === undefined ? el.textContent : el.textContent = txt;
const html = (el, markup) => markup === undefined ? el.innerHTML : el.innerHTML = markup;
const valor = (el, val) => val === undefined ? el.value : el.value = val;
const atributo = (el, attr, val) => val === undefined ? el.getAttribute(attr) : el.setAttribute(attr, val);
const removerAtributo = (el, attr) => el.removeAttribute(attr);

// Estilos
const css = (el, prop, val) => el.style[prop] = val;
const ocultar = (el) => el.style.display = 'none';
const mostrar = (el, display = 'block') => el.style.display = display;

// Dimensiones y Scroll
const anchoVentana = () => window.innerWidth;
const altoVentana = () => window.innerHeight;
const scrollY = () => window.scrollY;
const scrollX = () => window.scrollX;
const rectangulo = (el) => el.getBoundingClientRect();

// ===========================================
//   Utilidades Generales (Strings y Arrays)
// ===========================================

const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reversaTexto = (str) => str.split('').reverse().join('');
const removerEspacios = (str) => str.replace(/\s+/g, '');
const vaciarArray = (arr) => arr.length = 0;
const mezclarArray = (arr) => arr.sort(() => Math.random() - 0.5);
const eliminarDuplicados = (arr) => [...new Set(arr)];
const clonarObjeto = (obj) => JSON.parse(JSON.stringify(obj));

// ==================================
//   Vectores (Puntos y Movimiento)
// ==================================

const crearVec = (x, y) => ({ x, y });
const vecSumar = (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y });
const vecRestar = (v1, v2) => ({ x: v1.x - v2.x, y: v1.y - v2.y });
const vecEscalar = (v, n) => ({ x: v.x * n, y: v.y * n });
const vecMag = (v) => Math.hypot(v.x, v.y);
const vecNormalizar = (v) => { const m = vecMag(v); return m ? vecEscalar(v, 1 / m) : { x: 0, y: 0 }; };
const vecDist = (v1, v2) => vecMag(vecRestar(v1, v2));
const vecDot = (v1, v2) => v1.x * v2.x + v1.y * v2.y;
const vecAngulo = (v) => Math.atan2(v.y, v.x);
const vecDeAngulo = (a) => ({ x: Math.cos(a), y: Math.sin(a) });
const vecLerp = (v1, v2, t) => ({ x: v1.x + (v2.x - v1.x) * t, y: v1.y + (v2.y - v1.y) * t });
const vecReflejar = (v, n) => vecRestar(v, vecEscalar(n, 2 * vecDot(v, n)));

// ===================================
//   Renderizado (Contexto y Dibujo)
// ===================================

const limpiarCanvas = (ctx) => ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
const ctxColor = (ctx, color) => ctx.fillStyle = color;
const ctxTrazo = (ctx, color, ancho = 1) => { ctx.strokeStyle = color; ctx.lineWidth = ancho; };
const dibujarRect = (ctx, x, y, w, h) => ctx.fillRect(x, y, w, h);
const dibujarRectTrazo = (ctx, x, y, w, h) => ctx.strokeRect(x, y, w, h);
const dibujarCirculo = (ctx, x, y, r) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
const dibujarLinea = (ctx, x1, y1, x2, y2) => { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); };
const dibujarPoligono = (ctx, puntos) => { ctx.beginPath(); ctx.moveTo(puntos[0].x, puntos[0].y); puntos.forEach(p => ctx.lineTo(p.x, p.y)); ctx.closePath(); ctx.fill(); };
const ctxGlow = (ctx, color, blur) => { ctx.shadowColor = color; ctx.shadowBlur = blur; };
const ctxOpacidad = (ctx, alfa) => ctx.globalAlpha = alfa;

// =========================
//   Colisiones (Hitboxes)
// =========================

const colRectRect = (r1, r2) => r1.x < r2.x + r2.w && r1.x + r1.w > r2.x && r1.y < r2.y + r2.h && r1.y + r1.h > r2.y;
const colCircCirc = (c1, c2) => vecDist(c1, c2) < c1.r + c2.r;
const colPuntoRect = (p, r) => p.x > r.x && p.x < r.x + r.w && p.y > r.y && p.y < r.y + r.h;
const colPuntoCirc = (p, c) => vecDist(p, c) < c.r;
const colRectCirc = (r, c) => {
    const x = Math.max(r.x, Math.min(c.x, r.x + r.w));
    const y = Math.max(r.y, Math.min(c.y, r.y + r.h));
    return colPuntoCirc({ x, y }, c);
};

// =============================
//   Transformaciones y Cámara
// =============================

const ctxRotar = (ctx, x, y, angulo) => { ctx.translate(x, y); ctx.rotate(angulo); ctx.translate(-x, -y); };
const ctxEscalar = (ctx, x, y, sx, sy) => { ctx.translate(x, y); ctx.scale(sx, sy); ctx.translate(-x, -y); };
const ctxReset = (ctx) => ctx.setTransform(1, 0, 0, 1, 0, 0);
const camSeguir = (ctx, targetX, targetY, canvasW, canvasH) => ctx.setTransform(1, 0, 0, 1, -targetX + canvasW / 2, -targetY + canvasH / 2);

// ==========================================
//   Física de Partículas y Movimiento
// ==========================================

const aplicarFuerza = (entidad, fuerza) => { entidad.acc.x += fuerza.x; entidad.acc.y += fuerza.y; };
const actualizarFisica = (entidad, friccion = 0.98) => {
    entidad.vel = vecSumar(entidad.vel, entidad.acc);
    entidad.pos = vecSumar(entidad.pos, entidad.vel);
    entidad.vel = vecEscalar(entidad.vel, friccion);
    entidad.acc = vecEscalar(entidad.acc, 0);
};
const rebotarBordes = (entidad, w, h) => {
    if (entidad.pos.x < 0 || entidad.pos.x > w) entidad.vel.x *= -1;
    if (entidad.pos.y < 0 || entidad.pos.y > h) entidad.vel.y *= -1;
};

// ===============================
//   Utilidades de Juego e Input
// ===============================

const mousePos = (canvas, evt) => {
    const rect = canvas.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
};
const anguloHacia = (origen, destino) => Math.atan2(destino.y - origen.y, destino.x - origen.x);
const oscilar = (tiempo, amplitud, frecuencia) => Math.sin(tiempo * frecuencia) * amplitud;
const shakeCanvas = (canvas, intensidad) => {
    const x = (Math.random() - 0.5) * intensidad;
    const y = (Math.random() - 0.5) * intensidad;
    canvas.style.transform = `translate(${x}px, ${y}px)`;
};

// ===================================
//   Colores y Efectos (Math-Visual)
// ===================================

const rgb = (r, g, b) => `rgb(${r},${g},${b})`;
const rgba = (r, g, b, a) => `rgba(${r},${g},${b},${a})`;
const hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`;
const colorAleatorio = () => `hsl(${Math.random() * 360}, 70%, 50%)`;
const lerpColor = (c1, c2, t) => `rgba(${c1.r + (c2.r - c1.r) * t}, ${c1.g + (c2.g - c1.g) * t}, ${c1.b + (c2.b - c1.b) * t}, ${c1.a + (c2.a - c1.a) * t})`;

// ==========================================
//   Pantalla y Configuración
// ==========================================

const ajustarCanvas = (canvas) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
const fullScreen = (el) => el.requestFullscreen();
const salirFullScreen = () => document.exitFullscreen();
const ocultarCursor = (canvas) => canvas.style.cursor = 'none';

// ====================
//   Lógica de Tiempo
// ====================

const fps = (dt) => Math.round(1000 / dt);
const segundoActual = () => Date.now() / 1000;
const pausa = (ms) => new Promise(res => setTimeout(res, ms));

// ============================
//   Generación Aleatoria Pro
// ============================

const probabilidad = (n) => Math.random() < n;
const elegirUno = (arr) => arr[Math.floor(Math.random() * arr.length)];
const pesosAleatorios = (opciones, pesos) => {
    let sum = pesos.reduce((a, b) => a + b, 0);
    let r = Math.random() * sum;
    return opciones.find((_, i) => (r -= pesos[i]) <= 0);
};

// ================================
//   Gestión de Tiempo (Pomodoro)
// ================================

const minASeg = (minutos) => minutos * 60;
const segAMin = (segundos) => Math.floor(segundos / 60);
// Formatea segundos a formato MM:SS (ej: 150 -> "02:30")
const formatearTiempo = (seg) => `${segAMin(seg).toString().padStart(2, '0')}:${(seg % 60).toString().padStart(2, '0')}`;
// Calcula el progreso para barras circulares (0 a 100)
const progresoPomodoro = (actual, total) => ((total - actual) / total) * 100;
// Notificación de cambio de estado (Estudio/Descanso)
const vibrarMovil = (ms = 200) => "vibrate" in navigator ? navigator.vibrate(ms) : null;

// =============================================
//   Audio y Sonidos (Sintetizador y Archivos)
// =============================================

// Crea un "Beep" electrónico sin necesidad de archivos (estilo Cyber/Goth)
const beep = (frec = 440, dur = 0.1, tipo = 'sine') => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tipo;
    osc.frequency.setValueAtTime(frec, ctx.currentTime);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + dur);
    osc.stop(ctx.currentTime + dur);
};
// Cargar y reproducir un archivo de sonido (ej: alarma.mp3)
const reproducirAudio = (url, vol = 1) => { const a = new Audio(url); a.volume = vol; a.play(); return a; };
// Sonido de "click" rápido para botones
const sonidoClick = () => beep(800, 0.05, 'square');
// Sonido de alerta Pomodoro
const alarmaFin = () => { beep(400, 0.5); setTimeout(() => beep(600, 0.5), 200); };

// =========================================
//   Elementos en Movimiento (Backgrounds)
// =========================================

// Movimiento flotante (Usa el oscilar que ya tienes pero aplicado a coordenadas)
const flotarObjeto = (yBase, t, amp, freq) => yBase + oscilar(t, amp, freq);
// Efecto Parallax (Mueve el fondo más lento que el frente)
const posicionParallax = (posOriginal, factor, scroll) => posOriginal - (scroll * factor);
// Envolver posición (Si sale por la derecha, aparece por la izquierda)
const envolverPantalla = (pos, limite) => (pos + limite) % limite;
// Genera puntos para una "lluvia" de elementos
const crearParticula = (w, h) => ({ x: aleatorioEntre(0, w), y: -10, v: aleatorioEntre(1, 5), tamaño: aleatorioEntre(1, 4) });

// ==========================================
//   Lógica de Ciclos (Engine de Animación)
// ==========================================

// Ejecuta una función cada segundo (ideal para el contador)
const cadaSegundo = (callback) => setInterval(callback, 1000);
// Pausa el contador
const detenerIntervalo = (id) => clearInterval(id);
// Interpolación de color para fondos que cambian según el tiempo (usa tu lerpColor)
const colorSegunTiempo = (tActual, tTotal, cInicio, cFin) => lerpColor(cInicio, cFin, tActual / tTotal);

// ==================================
//   Interacción de Fondo con Mouse
// ==================================

// Verifica si el mouse está cerca de un elemento flotante
const mouseCerca = (p1, p2, dist = 100) => vecDist(p1, p2) < dist;
// Empuja un objeto si el mouse se acerca (Física simple)
const huirDelMouse = (objPos, mPos, fuerza = 5) => mouseCerca(objPos, mPos) ? vecSumar(objPos, vecEscalar(vecNormalizar(vecRestar(objPos, mPos)), fuerza)) : objPos;

// =================================
//   Colores y Estética (Cyber-UI)
// =================================

// Convierte Hexadecimal a RGB
const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b, str: `rgb(${r},${g},${b})` };
};
// Genera un color aleatorio con formato Hex
const colorHexAleatorio = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
// Oscurece o aclara un color (n positivo para aclarar, negativo para oscurecer)
const ajustarBrillo = (hex, n) => '#' + hex.replace(/^#/, '').replace(/../g, x => ('0' + Math.min(255, Math.max(0, parseInt(x, 16) + n)).toString(16)).slice(-2));
// Obtiene el color de contraste (blanco o negro) según el fondo
const colorContraste = (hex) => {
    const { r, g, b } = hexToRgb(hex);
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '#000' : '#fff';
};

// ============================
//   Redes y Promesas (Async)
// ============================

// Fetch simplificado que devuelve JSON directamente
const pedirJSON = async (url) => { const res = await fetch(url); return res.json(); };
// Añade un tiempo de espera a una ejecución (Delay)
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// Ejecuta una función con un tiempo límite (Timeout)
const ejecutarConLimite = (promesa, ms) => Promise.race([promesa, new Promise((_, reject) => setTimeout(() => reject('Tiempo agotado'), ms))]);

// =======================
//   Sistema y Navegador
// =======================

// Copiar texto al portapapeles
const copiarAlPortapapeles = (txt) => navigator.clipboard.writeText(txt);
// Detectar si el usuario está en móvil
const esMovil = () => /Android|iPhone|iPad/i.test(navigator.userAgent);
// Obtener parámetros de la URL (ej: index.html?tema=oscuro)
const parametroURL = (p) => new URLSearchParams(window.location.search).get(p);
// Cambiar el título de la pestaña dinámicamente
const cambiarTitulo = (txt) => document.title = txt;
// Vibración de éxito (patrón corto)
const vibrarExito = () => vibrarMovil([50, 30, 50]);

// ========================
//   Strings y Generación
// ========================

// Genera un ID único corto (estilo Nanoid)
const uuid = () => Math.random().toString(36).substring(2, 9);
// Convierte texto a "slug" (ej: "Hola Mundo" -> "hola-mundo")
const slugify = (str) => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
// Estima el tiempo de lectura de un texto
const tiempoLectura = (txt) => Math.ceil(txt.split(/\s+/).length / 200);

// =========================
//   Arrays de Datos (Pro)
// =========================

// Agrupa un array de objetos por una propiedad
const agruparPor = (arr, prop) => arr.reduce((acc, obj) => { const key = obj[prop]; acc[key] = (acc[key] || []); acc[key].push(obj); return acc; }, {});
// Cuenta cuántas veces se repite cada elemento en un array
const frecuencia = (arr) => arr.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc; }, {});
// Obtiene un elemento aleatorio sin repetir (modifica el array original)
const extraerAleatorio = (arr) => arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
// Carga un archivo JSON
const cargarJSON = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.json();
};