import { Component, OnInit } from '@angular/core';
import { QuienSoyService } from './Services/quien-soy.service';

@Component({
  selector: 'quien-soy', //si pongo 'texto' me genera un nuevo tag, si quiero un div que llame a la clase tengo que poner '.texto' y si quiero un div que llame a este id pongo '#texto'
  template: `
    <h1>{{ title }}</h1>
    <ul>
      <li *ngFor="let info of personalInformation">{{ info }}</li>
    </ul>
    <h2>Foto de perfil</h2>
    <img src="images/perfil.jpg" alt="error al cargar la foto de perfil" />
    <h2>Que juegos habra?</h2>
    <ol>
      <li *ngFor="let game of games">{{ game }}</li>
    </ol>
  `, // {{}} se usa para renderizar algo dinamicamente (si el contenido cambia, esto cambia automaticamente).
  // * antes de la directiva cuando modifica su estructura, agrega o remueve un elemento
  styleUrls: ['./quien-soy.component.css'],
})
export class QuienSoyComponent implements OnInit {
  title = 'Quien soy??';
  personalInformation;
  games;

  constructor(service: QuienSoyService) {
    //dependency injection en los providers del modulo.
    this.personalInformation = service.getPersonalInformation();
    this.games = service.getGames();
  }

  ngOnInit(): void {}
}
