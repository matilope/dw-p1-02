"use strict";

/* TODO */

let categoria = parseInt(prompt("Ingrese su categoria: 1: u$s 1000, 2: u$s 1500, 3: u$s 2000")[0]);

let subCategoria = prompt("Ingrese su subcategoria: A: x1.5, B: x2, C: x2.5")[0].toUpperCase();

if (categoria !== 1 && categoria !== 2 && categoria !== 3) {
  alert("La categoria debe ser 1, 2, 3.");
}
if (categoria === 1) {
  categoria = 1000;
}

if (categoria === 2) {
  categoria = 1500;
}

if (categoria === 3) {
  categoria = 2000;
}


if (subCategoria !== "A" && subCategoria !== "B" && subCategoria !== "C") {
  alert("La subcategoria debe ser A, B, C.");
} else {
  if (subCategoria === "A") {
    categoria = categoria * 1.5;
  }

  if (subCategoria === "B") {
    categoria = categoria * 2;
  }

  if (subCategoria === "C") {
    categoria = categoria * 2.5;
  }
}

if (categoria >= 1500 && categoria <= 3000) {
  alert("Se encuentra dentro del rango inicial");
}

if (categoria > 3000 && categoria <= 4000) {
  alert("Se encuentra dentro del rango intermedio");
}

if (categoria > 4000) {
  alert("Se encuentra dentro del rango avanzado");
}
