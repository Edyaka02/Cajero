import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensadorComprobanteComponent } from './dispensador-comprobante.component';

describe('DispensadorComprobanteComponent', () => {
  let component: DispensadorComprobanteComponent;
  let fixture: ComponentFixture<DispensadorComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensadorComprobanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensadorComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
