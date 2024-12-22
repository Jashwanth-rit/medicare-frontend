import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDoctorComponent } from './seller-doctor.component';

describe('SellerDoctorComponent', () => {
  let component: SellerDoctorComponent;
  let fixture: ComponentFixture<SellerDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
