import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHealthcareComponent } from './seller-healthcare.component';

describe('SellerHealthcareComponent', () => {
  let component: SellerHealthcareComponent;
  let fixture: ComponentFixture<SellerHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerHealthcareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
