
import { tablero } from "./model";

import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

const tableroHTML = document.querySelector(".tablero");
const botonIniciar = document.querySelector("#iniciar-partida");

const pintarTablero = (): void => {
  if (!(tableroHTML instanceof HTMLDivElement)) return;

  tableroHTML.innerHTML = "";

  for (let i = 0; i < tablero.cartas.length; i++) {
    const nuevaCarta = document.createElement("div");
    nuevaCarta.setAttribute("data-indice-array", String(i));

    const nuevaImagen = document.createElement("img");
    nuevaImagen.setAttribute("data-indice-imagen", String(i));

    if (
      tablero.cartas[i].estaVuelta ||
      tablero.cartas[i].encontrada
    ) {
      nuevaImagen.setAttribute("src", tablero.cartas[i].imagen);
    } else {
      nuevaImagen.setAttribute("src", "/imagenes/Reversa%200.png");
    }

    nuevaCarta.appendChild(nuevaImagen);
    tableroHTML.appendChild(nuevaCarta);
  }

  escucharCartas();
};

const escucharCartas = (): void => {
  const cartasHTML = document.querySelectorAll("div[data-indice-array]");

  cartasHTML.forEach((cartaHTML) => {
    cartaHTML.addEventListener("click", () => {
      const indiceCarta = Number(
        cartaHTML.getAttribute("data-indice-array")
      );

      if (!sePuedeVoltearLaCarta(tablero, indiceCarta)) {
        return;
      }

      voltearLaCarta(tablero, indiceCarta);

      if (tablero.estadoPartida === "CeroCartasLevantadas") {
        tablero.indiceCartaVolteadaA = indiceCarta;
        tablero.estadoPartida = "UnaCartaLevantada";

      } else if (tablero.estadoPartida === "UnaCartaLevantada") {
        tablero.indiceCartaVolteadaB = indiceCarta;
        tablero.estadoPartida = "DosCartasLevantadas";

        const indiceA = tablero.indiceCartaVolteadaA!;

        if (sonPareja(indiceA, indiceCarta, tablero)) {
          parejaEncontrada(tablero, indiceA, indiceCarta);
        } else {
          setTimeout(() => {
            parejaNoEncontrada(tablero, indiceA, indiceCarta);
            pintarTablero();
          }, 1000);
        }
      }

      pintarTablero();
    });
  });
};

if (botonIniciar instanceof HTMLButtonElement) {
  botonIniciar.addEventListener("click", () => {
    iniciaPartida(tablero);
    pintarTablero();
  });
}

pintarTablero();
