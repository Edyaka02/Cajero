import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDebitoComponent } from './tarjeta-debito.component';

describe('TarjetaDebitoComponent', () => {
  let component: TarjetaDebitoComponent;
  let fixture: ComponentFixture<TarjetaDebitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDebitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
