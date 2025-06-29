import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeclaBotonNumericoComponent } from './tecla-boton-numerico.component';

describe('TeclaBotonNumericoComponent', () => {
  let component: TeclaBotonNumericoComponent;
  let fixture: ComponentFixture<TeclaBotonNumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeclaBotonNumericoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeclaBotonNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
