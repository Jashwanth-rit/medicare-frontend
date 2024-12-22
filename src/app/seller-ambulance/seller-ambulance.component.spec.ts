import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAmbulanceComponent } from './seller-ambulance.component';

describe('SellerAmbulanceComponent', () => {
  let component: SellerAmbulanceComponent;
  let fixture: ComponentFixture<SellerAmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerAmbulanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerAmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
