import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorTarjetaComponent } from './lector-tarjeta.component';

describe('LectorTarjetaComponent', () => {
  let component: LectorTarjetaComponent;
  let fixture: ComponentFixture<LectorTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectorTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectorTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
