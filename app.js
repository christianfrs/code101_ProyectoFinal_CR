// ====================================================================
// JUEGO DE ADIVINANZA DE NÚMEROS
// Criterios: Lógica, bucle 'while', validaciones, prompt/alert/console.log
// ====================================================================

// --- 1. CONFIGURACIÓN INICIAL (Variables) ---

// Recomendación: Usar const para valores fijos
const MAX_INTENTOS = 3;
const LIMITE_MINIMO = 1;
const LIMITE_MAXIMO = 10;
const NOMBRE_JUGADOR = prompt("¡Bienvenido! ¿Cuál es tu nombre?") || "Jugador(a)"; // Pide nombre, usa un valor por defecto si no lo ingresa

// Lógica del juego: Genera un número secreto entre 1 y 10
// Math.floor(Math.random() * (max - min + 1)) + min
let numeroSecreto = Math.floor(Math.random() * (LIMITE_MAXIMO - LIMITE_MINIMO + 1)) + LIMITE_MINIMO;
let intentos = 1;

// --- Mensaje en consola que indique inicio del juego (Requerimiento) ---
console.log("========================================");
console.log(`🎮 INICIO DEL JUEGO: Adivina el Número`);
console.log(`Hola, ${NOMBRE_JUGADOR}. Tienes ${MAX_INTENTOS} intentos.`);
console.log(`El número secreto está entre ${LIMITE_MINIMO} y ${LIMITE_MAXIMO}.`);
console.log("========================================");


// --- 2. BUCLE PRINCIPAL DEL JUEGO (Uso de bucles) ---

// El juego continúa mientras el jugador tenga intentos
while (intentos <= MAX_INTENTOS) {
    
    // Interfaz básica: Usa prompt()
    // Recomendación: Usa Number() para la conversión
    let numeroIntroducido = Number(prompt(`Intento ${intentos} de ${MAX_INTENTOS}. Introduce un número entre ${LIMITE_MINIMO} y ${LIMITE_MAXIMO}:`));
    
    // --- 3. VALIDACIONES (Verifica rango, vacío o mal escrito) ---
    
    // Valida que el número no esté vacío (NaN) y esté dentro del rango [1, 10]
    if (isNaN(numeroIntroducido) || numeroIntroducido > LIMITE_MAXIMO || numeroIntroducido < LIMITE_MINIMO) {
        
        // Mensajes claros (Interfaz básica)
        alert(`❌ Número no válido. Debes introducir un número entre ${LIMITE_MINIMO} y ${LIMITE_MAXIMO}.`);
        console.warn(`[Intento ${intentos}] ${NOMBRE_JUGADOR} ingresó un valor inválido: ${numeroIntroducido}. No se consume el intento.`);
        
        // El 'continue' hace que el bucle salte a la siguiente iteración sin contar el intento
        continue;
    }
    
    // Consola: Muestra el flujo y estado del juego
    console.log(`[Intento ${intentos}] ${NOMBRE_JUGADOR} introduce el número: ${numeroIntroducido}`);
    
    // --- 4. LÓGICA DEL JUEGO (Verificación) ---
    
    if (numeroSecreto === numeroIntroducido) {
        // Correcto: GANA EL JUGADOR
        
        // Interfaz básica: Usa alert() y console.log()
        alert(`🎉 ¡CORRECTO, ${NOMBRE_JUGADOR}! ¡GANASTE! El número era ${numeroSecreto}.`);
        console.log(`🎉 FIN DEL JUEGO: ${NOMBRE_JUGADOR} GANA en ${intentos} intentos.`);
        
        // El 'break' sale inmediatamente del bucle (finaliza el juego)
        break;
        
    } else {
        // Incorrecto: Mostrar si es demasiado alto o demasiado bajo
        
        if (numeroIntroducido > numeroSecreto) {
            alert("⬇️ Demasiado ALTO. ¡Inténtalo de nuevo!");
            console.log("Resultado: Demasiado ALTO.");
        } else {
            alert("⬆️ Demasiado BAJO. ¡Inténtalo de nuevo!");
            console.log("Resultado: Demasiado BAJO.");
        }
    }

    // Incrementar el contador de intentos al final de cada ciclo válido
    intentos++;
}

// --- 5. MENSAJE FINAL (Si se acabaron los intentos) ---

// Si el bucle terminó y el número de intentos es mayor que MAX_INTENTOS, el jugador perdió.
if (intentos > MAX_INTENTOS) {
    // Lógica del juego: Mensaje final personalizado
    alert(`😔 Lo sentimos, ${NOMBRE_JUGADOR}. ¡Te quedaste sin intentos!`);
    alert(`El número secreto era ${numeroSecreto}. ¡Mejor suerte la próxima!`);
    
    // Consola: Mensaje de fin del juego (Requerimiento)
    console.log(`❌ FIN DEL JUEGO: ${NOMBRE_JUGADOR} PIERDE. Se agotaron los ${MAX_INTENTOS} intentos.`);
}

console.log("========================================");