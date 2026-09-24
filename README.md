# Ejercicios Básicos de Pruebas Unitarias con Jest

Este proyecto contiene funciones básicas en JavaScript y pruebas unitarias utilizando **Jest**.  
El objetivo es aprender a validar el comportamiento de las funciones y comprender cómo estructurar pruebas sencillas.

---

## Estructura del proyecto


proyecto/
│
├── funciones.js        # Implementación de funciones
├── funciones.test.js   # Pruebas unitarias con Jest
├── package.json        # Configuración de npm y Jest
├── README.md           # Documentación del proyecto
└── .gitignore          # Archivos ignorados
---
# Estructura del proyecto
1. calcularDescuento(precio, porcentaje)
  Calcula el precio final aplicando un descuento.
  Si el porcentaje es menor a 0 o mayor a 100, devuelve "Porcentaje inválido".
  
  Ejemplo:
  calcularDescuento(1000, 20); // 800

2. validarPassword(password)
  La contraseña es válida si:
  Tiene al menos 8 caracteres.
  Contiene al menos un número.
  
  Ejemplo:
  validarPassword("abc12345"); // true

3. celsiusAFahrenheit(celsius)
  Convierte grados Celsius a Fahrenheit usando la fórmula:
  °𝐹=(°𝐶×9/5)+32
  
  Ejemplo:
  celsiusAFahrenheit(25); // 77

4. esMayorDeEdad(edad)
  Devuelve true si la edad es mayor o igual a 18.
  Devuelve false si es menor.
  
  Ejemplo:
  esMayorDeEdad(16); // false
  
5. generarNombreCompleto(nombre, apellido)
  Une nombre y apellido en un string con un espacio entre ellos.

  Ejemplo:
  generarNombreCompleto("Ana", "Martínez"); // "Ana Martínez"
