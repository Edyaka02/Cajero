import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-debito',
  imports: [CommonModule],
  templateUrl: './tarjeta-debito.component.html',
  styleUrl: './tarjeta-debito.component.css',
})
export class TarjetaDebitoComponent {
  currentYear = new Date().getFullYear();
  years: number[] = Array.from({ length: 8 }, (_, i) => this.currentYear - i);

  soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }
}
