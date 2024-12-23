import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceComponent } from './ambulance.component';

describe('AmbulanceComponent', () => {
  let component: AmbulanceComponent;
  let fixture: ComponentFixture<AmbulanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmbulanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
