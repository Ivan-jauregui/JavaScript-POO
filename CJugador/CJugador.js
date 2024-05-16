class CJugador {
  constructor(nombre, POS, edad, est, P, NAC) {
    this.nombre=nombre;
    this.POS=POS;
    this.edad=edad;
    this.est=est;
    this.P=P;
    this.NAC=NAC;
  }

  esArgentino() {
    return this.NAC === "Argentina";
  }

  pesoEntre(min, max) {
    const peso = parseInt(this.P);
    return peso >= min && peso <= max;
  }

  Estatura() {
    return parseFloat(this.est);
  }

  imprimirDatos() {
    console.log(`Nombre: ${this.nombre}, Posición: ${this.POS}, Edad: ${this.edad}, Estatura: ${this.est}, Peso: ${this.P}, Nacionalidad: ${this.NAC}`);
  }
}


const jugadores = [
  new CJugador("Fábio1", "G", "43", "1.88 m", "86 kg", "Brasil"),
  new CJugador("Marlon4", "D", "28", "1.83 m", "78 kg", "Brasil"),
  new CJugador("Marcelo12", "D", "35", "1.73 m", "72 kg", "Brasil"),
  new CJugador("Nino33", "D", "26", "1.88 m", "82 kg", "Brasil"),
  new CJugador("John Kennedy9", "A", "21", "1.73 m", "71 kg", "Brasil"),
  new CJugador("Keno11", "A", "34", "1.78 m", "72 kg", "Brasil"),
  new CJugador("Germán Cano14", "A", "35", "1.78 m", "81 kg", "Argentina")
];




console.log("Jugadores argentinos: ");
jugadores.forEach(jugador => {
  if (jugador.esArgentino()) {
    jugador.imprimirDatos();
  }
});




console.log("Jugadores con peso entre 75 y 80 kg: ");
jugadores.forEach(jugador => {
  if (jugador.pesoEntre(75, 80)) {
    jugador.imprimirDatos();
  }
});




let jugadorMasAlto = jugadores[0];
jugadores.forEach(jugador => {
  if (jugador.Estatura() > jugadorMasAlto.Estatura()) {
    jugadorMasAlto = jugador;
  }
});

console.log("El jugador mas alto: ");
jugadorMasAlto.imprimirDatos();
