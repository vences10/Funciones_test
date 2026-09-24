// funciones.test.js
const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto
} = require("./funciones");

// Ejercicio 1 — Calculadora de descuento
describe("calcularDescuento", () => {
  test("aplica descuento válido", () => {
    expect(calcularDescuento(1000, 20)).toBe(800);
  });

  test("descuento de 0%", () => {
    expect(calcularDescuento(500, 0)).toBe(500);
  });

  test("descuento de 100%", () => {
    expect(calcularDescuento(200, 100)).toBe(0);
  });

  test("porcentaje inválido mayor a 100", () => {
    expect(calcularDescuento(300, 120)).toBe("Porcentaje inválido");
  });

  test("porcentaje inválido menor a 0", () => {
    expect(calcularDescuento(300, -10)).toBe("Porcentaje inválido");
  });
});

// Ejercicio 2 — Validación de contraseña
describe("validarPassword", () => {
  test("contraseña válida con letras y números", () => {
    expect(validarPassword("abc12345")).toBe(true);
  });

  test("contraseña sin números", () => {
    expect(validarPassword("abcdefgh")).toBe(false);
  });

  test("contraseña demasiado corta", () => {
    expect(validarPassword("abc12")).toBe(false);
  });

  test("contraseña solo números pero válida", () => {
    expect(validarPassword("12345678")).toBe(true);
  });
});

// Ejercicio 3 — Conversor de temperatura
describe("celsiusAFahrenheit", () => {
  test("0°C debe ser 32°F", () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
  });

  test("25°C debe ser 77°F", () => {
    expect(celsiusAFahrenheit(25)).toBe(77);
  });

  test("-10°C debe ser 14°F", () => {
    expect(celsiusAFahrenheit(-10)).toBe(14);
  });
});

// Ejercicio 4 — Verificador de mayoría de edad
describe("esMayorDeEdad", () => {
  test("18 años debe ser mayor de edad", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  test("25 años debe ser mayor de edad", () => {
    expect(esMayorDeEdad(25)).toBe(true);
  });

  test("16 años no es mayor de edad", () => {
    expect(esMayorDeEdad(16)).toBe(false);
  });
});

// Ejercicio 5 — Generador de nombre completo
describe("generarNombreCompleto", () => {
  test("Ana Martínez", () => {
    expect(generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
  });

  test("Luis Ramírez", () => {
    expect(generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
  });
});
