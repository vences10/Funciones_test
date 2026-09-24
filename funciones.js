// funciones.js

function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }
  const descuento = (precio * porcentaje) / 100;
  return precio - descuento;
}

function validarPassword(password) {
  const tieneLongitudMinima = password.length >= 8;
  const contieneNumero = /\d/.test(password);
  return tieneLongitudMinima && contieneNumero;
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

module.exports = {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
};
