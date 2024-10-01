// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        return "El número ingresado es par.";
    } else {
        return "El número ingresado es impar.";  
    }
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
        return "Eres un menor de edad";
    } else if (edad >= 18 && edad <= 65) {
        return "Eres un adulto";
    } else {
        return "Eres un adulto mayor";
    }
}

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0;
  do {
    console.log("Estoy aprendiendo JavaScript");
    contador++;
  } while (contador < 5);
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    let numeroTope = 10
    for (let i = 0; i <= numeroTope; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
    }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        if (i === 6) {
          break;  
        }
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
          continue;  // Salta la iteración cuando i es igual a 5
        }
        console.log(i);
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    let numero = 1 
    switch (numero) {
        case 1:
          console.log("¡Nooo, es lunes! 😢");
          break;
        case 2:
          console.log("¡Hoy es martes! 🥵");
          break;
        case 3:
          console.log("¡Hoy es miércoles! 🤓");
          break;
        case 4:
          console.log("¡Hoy es jueves!");
          break;
        case 5:
            console.log("¡Hoy es viernes!");
          break;
        case 6:
            console.log("¡SIII hoy es sabado!!!!");
          break;
        case 7:
            console.log("¡SIII hoy domingo!!!!");
    }
    
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    let caracter = "a"
    switch (caracter) { 
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return console.log("El caracter ingresado es una vocal!!");  
        default:
            return console.log("El caracter ingresado no es una vocal!!");
    }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos.";
    } else if (a < 0 && b < 0 && c < 0) {
        return "Todos son negativos.";
    } else {
        return "Al menos uno es negativo.";
    }
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
