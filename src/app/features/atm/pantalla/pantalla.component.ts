import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { PinComponent } from './pin/pin.component';
import { MenuComponent } from './menu/menu.component';
import { RetiroComponent } from './retiro/retiro.component';
import { SaldoComponent } from './saldo/saldo.component';


@Component({
  selector: 'app-pantalla',
  standalone: true,
  imports: [
    CommonModule,
    BienvenidaComponent,
    PinComponent,
    MenuComponent,
    RetiroComponent,
    SaldoComponent,
  ],
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.scss',
})
export class PantallaComponent {
  pantallaActual: 'bienvenida' | 'pin' | 'menu' | 'retiro' | 'saldo' =
    'bienvenida';

  cambiarPantalla(nueva: typeof this.pantallaActual) {
    this.pantallaActual = nueva;
  }
}
