import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroesArray: string[] = ['Aquaman', 'Antman', 'Chavo','Goku']
  heroeBorrado: string ="";

  borrarHeroe() {
    console.log('Borrando..');
    this.heroeBorrado = this.heroesArray.shift() || "";
  }

}
