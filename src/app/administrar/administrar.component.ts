import { Component } from '@angular/core';

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent {
  hojasDeVida: any[] = [];
  recibirHojaDeVida(hojaDeVida: any) {
    this.hojasDeVida.push(hojaDeVida);
  }
}
