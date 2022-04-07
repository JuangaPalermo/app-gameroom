export class QuienSoyService {
  getPersonalInformation() {
    return [
      'Nombre: Juan Gabriel Palermo',
      'Telefono: 11 2899-6406',
      'Correo: juangabrielpalermo@gmail.com',
    ];
  }

  getGames() {
    return [
      'Ahorcado: el jugador debe adivinar la palabra',
      'Mayor o menor: el jugador debe adivinar si el numero siguiente es mayor o menor',
      'Preguntados: crees saber mucho? Ponte a prueba!',
      'Juego propio: todavia no lo elegi porque no estuve muy creativo, stay tuned folks!',
    ];
  }
}
