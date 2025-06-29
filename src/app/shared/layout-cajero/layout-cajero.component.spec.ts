import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCajeroComponent } from './layout-cajero.component';

describe('LayoutCajeroComponent', () => {
  let component: LayoutCajeroComponent;
  let fixture: ComponentFixture<LayoutCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCajeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
