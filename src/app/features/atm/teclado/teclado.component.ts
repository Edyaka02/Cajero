import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeclaBotonNumericoComponent } from './tecla-boton-numerico/tecla-boton-numerico.component';

@Component({
  selector: 'app-teclado',
  imports: [CommonModule, TeclaBotonNumericoComponent],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.scss',
})
export class TecladoComponent {
  // Aquí puedes agregar la lógica del componente Teclado si es necesario
  // Por ejemplo, manejar eventos de clic en los botones del teclado
  onKeyPress(key: string): void {
    console.log(`Tecla presionada: ${key}`);
    alert(`Tecla presionada: ${key}`);
    // Aquí puedes agregar la lógica para manejar la tecla presionada
  }
}
