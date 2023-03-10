import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
     nombre: string = 'Ironman';
     edad: number = 45

     get nombreCapitralizado(){
        return this.nombre.toUpperCase();
     }
     
     obtenerEdad(): string {
        return `${this.nombre} - ${this.edad}`;
     }

     cambiarNombre(): void {
      this.nombre = 'Spiderman';
     }
     cambiarEdad(){
      this.edad = 30;
     }

}