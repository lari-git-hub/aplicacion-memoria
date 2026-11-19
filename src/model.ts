

export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen: "/imagenes/1.png",
  },
  {
    idFoto: 2,
    imagen: "/imagenes/2.png",
  },
  {
    idFoto: 3,
    imagen: "/imagenes/3.png",
  },
  {
    idFoto: 4,
    imagen: "/imagenes/4.png",
  },
  {
    idFoto: 5,
    imagen: "/imagenes/5.png",
  },
  {
    idFoto: 6,
    imagen: "/imagenes/6.png",
  },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  
  const coleccionCartas: Carta[] = [];


  for (let i = 0; i < infoCartas.length; i++) {
    const primeraCarta = crearCartaInicial(
      infoCartas[i].idFoto,
      infoCartas[i].imagen
    );

    const segundaCarta = crearCartaInicial(
      infoCartas[i].idFoto,
      infoCartas[i].imagen
    );

    coleccionCartas.push(primeraCarta);
    coleccionCartas.push(segundaCarta);
  }

  return coleccionCartas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

  export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});
export let tablero: Tablero = crearTableroInicial();



