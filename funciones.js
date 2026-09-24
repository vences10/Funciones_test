// funciones.js

// Ejercicio 1 — Calculadora de descuento
let precio = Number(prompt("Ingresa el precio:"));
let porcentaje = Number(prompt("Ingresa el descuento de 0 a 100:"));

function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }
  const descuento = (precio * porcentaje) / 100;
  return precio - descuento;
}

console.log("Precio final:", calcularDescuento(precio, porcentaje));


// Ejercicio 2 — Validación de contraseña
let password = prompt("Ingresa tu contraseña:");

function validarPassword(password) {
  const tieneLongitudMinima = password.length >= 8;
  const contieneNumero = /\d/.test(password);
  return tieneLongitudMinima && contieneNumero;
}

console.log("Contraseña válida:", validarPassword(password));


// Ejercicio 3 — Conversor de temperatura
let celsius = Number(prompt("Ingresa los grados Celsius:"));

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

console.log(`Los grados Fahrenheit son: ${celsiusAFahrenheit(celsius)}`);


// Ejercicio 4 — Verificador de mayoría de edad
let edad = Number(prompt("Ingresa tu edad:"));

function esMayorDeEdad(edad) {
  return edad >= 18;
}

console.log("¿Es mayor de edad?:", esMayorDeEdad(edad));


// Ejercicio 5 — Generador de nombre completo
let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

console.log("Nombre completo:", generarNombreCompleto(nombre, apellido));
