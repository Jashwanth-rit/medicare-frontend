import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPatientComponent } from './seller-patient.component';

describe('SellerPatientComponent', () => {
  let component: SellerPatientComponent;
  let fixture: ComponentFixture<SellerPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
