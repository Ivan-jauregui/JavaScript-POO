class CAutores {
  constructor(nombre, apellido, nacionalidad, mejorObra, añoPublicacion, edadPublicacion) {
      this.nombre=nombre;
      this.apellido=apellido;
      this.nacionalidad=nacionalidad;
      this.mejorObra=mejorObra;
      this.añoPublicacion=añoPublicacion;
      this.edadPublicacion=edadPublicacion;
  }

  static autoresArgentinos(autores){
      let resultado=[];
      for (let i=0;i<autores.length;i++) {
          if (autores[i].nacionalidad === 'Argentino') {
              resultado.push(autores[i]);
          }}
      return resultado;
    }

  static publicadosEntre(autores,primerFecha, segundaFecha){
      let resultado = [];
      for (let i=0;i<autores.length;i++) {
          if (autores[i].añoPublicacion >= primerFecha && autores[i].añoPublicacion <= segundaFecha) {
              resultado.push(autores[i]);
          }}
      return resultado;
    }

  static promedio(autores){
      let edad = 0;
      for (let i=0;i<autores.length;i++) {
        edad += autores[i].edadPublicacion;
        }
      return edad/autores.length;
    }

  static mostrarAutores(autores){
      return autores;
    }
}

const autores=[
  new CAutores('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40),
  new CAutores('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48),
  new CAutores('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40),
  new CAutores('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45),
  new CAutores('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56),
  new CAutores('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38),
  new CAutores('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29),
  new CAutores('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31)];

const autoresArgentinos = CAutores.autoresArgentinos(autores);
console.log('Autores Argentinos:', autoresArgentinos);

const autor19601980 = CAutores.publicadosEntre(autores, 1960, 1980);
console.log('Autores que publicaron entre 1960 y 1980:', autor19601980);

const promedioEdad = CAutores.promedio(autores);
console.log('Promedio de edad de publicación:', promedioEdad);

const Autores = CAutores.mostrarAutores(autores);
console.log('Todos los autores:', Autores);
