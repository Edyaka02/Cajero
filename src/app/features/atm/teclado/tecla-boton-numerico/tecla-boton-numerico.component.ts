import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tecla-boton-numerico',
  imports: [],
  template: `
    <button
      [attr.aria-label]="'teclado-' + value"
      class="bg-gray-300 rounded p-2 font-bold w-10 h-10"
      (click)="handleClick()"
    >
      <i [ngClass]="'fa-solid fa-' + value"></i>
    </button>
  `,
  templateUrl: './tecla-boton-numerico.component.html',
  styleUrl: './tecla-boton-numerico.component.css'
})
export class TeclaBotonNumericoComponent {
  @Input() value!: string;
  @Output() keyPress = new EventEmitter<string>();

  handleClick() {
    this.keyPress.emit(this.value);
  }
}
