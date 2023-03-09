import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template:`
        <h3>la base <strong>{{base}}</strong></h3>
        <button (click)="operar(1)">+1</button>
        <button (click)="operar(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="operar(-base)">- {{base}}</button>
        <button (click)="operar(-1)">-1</button>
    
    
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    sumar(){
        this.numero += 1;
    }
    restar(){
        this.numero -= 1;
    }
    operar(valor: number){
        this.numero += valor;
    }

}