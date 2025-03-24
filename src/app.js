import "bootstrap";
import "./style.css";

window.onload = function () {
  generarCarta();

  document.getElementById("CambiarCarta").addEventListener("click", generarCarta);

  document.getElementById("cambiar-tamaño").addEventListener("click", cambiarTamaño)
};

function generarCarta() {
  const palos = ["♥", "♠", "♣", "♦"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  document.getElementById("palo-top").innerHTML = paloAleatorio;
  document.getElementById("valor").innerHTML = valorAleatorio;
  document.getElementById("palo-bottom").innerHTML = paloAleatorio;

  const carta = document.getElementById("carta");
  carta.classList.remove("corazon", "diamante", "picas", "trebol");

  if (paloAleatorio === "♥" || paloAleatorio === "♦") {
    carta.classList.add("corazon");
  } else {
    carta.classList.add("picas");
  }
}
