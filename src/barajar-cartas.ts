
export const barajarCartas = (cartas: number[]): number[] => {
  const cartasMezcladas = [...cartas];

  for (let i = cartasMezcladas.length - 1; i > 0; i--) {
    const indiceAleatorio = Math.floor(Math.random() * (i + 1));

    const temporal = cartasMezcladas[i];
    cartasMezcladas[i] = cartasMezcladas[indiceAleatorio];
    cartasMezcladas[indiceAleatorio] = temporal;
  }

  return cartasMezcladas;
};

export const obtenerCartaAleatoria = (cartas: number[]) : number => {
  if(cartas.length === 0 ){
    return 0
  }
  const cartaAleatoria = Math.floor(Math.random() * cartas.length)

  return cartas[cartaAleatoria];
};

export const sacarCarta = (cartas: number[]): number => {
 const cartasMezcladas = barajarCartas (cartas)

 const cartaAleatoria = obtenerCartaAleatoria(cartasMezcladas)

 return cartaAleatoria

}

