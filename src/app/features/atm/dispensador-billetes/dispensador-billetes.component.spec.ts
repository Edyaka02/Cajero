import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensadorBilletesComponent } from './dispensador-billetes.component';

describe('DispensadorBilletesComponent', () => {
  let component: DispensadorBilletesComponent;
  let fixture: ComponentFixture<DispensadorBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispensadorBilletesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispensadorBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
