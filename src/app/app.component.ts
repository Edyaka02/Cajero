import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PantallaComponent } from './features/atm/pantalla/pantalla.component';
import { TecladoComponent } from './features/atm/teclado/teclado.component';
import { LayoutCajeroComponent } from './shared/layout-cajero/layout-cajero.component';
import { TarjetaDebitoComponent } from './features/tarjeta-debito/tarjeta-debito.component';
import { DispensadorBilletesComponent } from './features/atm/dispensador-billetes/dispensador-billetes.component';
import { DispensadorComprobanteComponent } from './features/atm/dispensador-comprobante/dispensador-comprobante.component';
import { LectorTarjetaComponent } from './features/atm/lector-tarjeta/lector-tarjeta.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PantallaComponent,
    TecladoComponent,
    LayoutCajeroComponent,
    TarjetaDebitoComponent,
    DispensadorBilletesComponent,
    DispensadorComprobanteComponent,
    LectorTarjetaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cajero';
}
