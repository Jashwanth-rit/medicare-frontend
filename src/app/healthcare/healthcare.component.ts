import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from '../sellerservice/seller.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID, OnInit } from '@angular/core';


import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-healthcare',
  standalone: true,
  imports: [NgbModule, CommonModule, CartComponent,FormsModule, HttpClientModule],
  templateUrl: './healthcare.component.html',
  styleUrl: './healthcare.component.css'
})
export class HealthcareComponent {

  medicalShops: any[] = [];
  error: string | null = null;
  healthcareTakers: any[] = [];

  constructor(private seller: SellerService, private router: Router,private http: HttpClient, 
    @Inject(PLATFORM_ID) private platformId: Object) {}


  ngOnInit(): void {

     // Get user's current location
     if (isPlatformBrowser(this.platformId)) {
      // Get user's current location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Latitude:', latitude, 'Longitude:', longitude);
            this.fetchNearbyMedicalShops(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            this.error = 'Could not fetch your location. Please enable location services.';
          }
        );
      } else {
        this.error = 'Geolocation is not supported by your browser.';
      }
    } else {
      this.error = 'Geolocation is not available in the server environment.';
    }
    // this.getHealthcareTakers();
  }

  getHealthcareTakers(): void {
    this.seller.getHealthcareTakers().subscribe(
      (res: any) => {
        this.healthcareTakers = res;
        console.log('Healthcare takers fetched successfully:', this.healthcareTakers);
      },
      (error: any) => console.error('Error fetching healthcare takers:', error)
    );
  }

  fetchNearbyMedicalShops(latitude: number, longitude: number): void {
    const maxDistance = 3000; // Example: 3 km
    this.seller.getNearbyhealthcare(latitude, longitude, maxDistance).subscribe({
      next: (data) => (this.medicalShops = data),
      error: (err) => {
        console.error('Error fetching nearby medical shops:', err);
        this.error = 'Failed to fetch nearby medical shops.';
      },
    });
    console.log('Medical Shops:', this.medicalShops);
  }

  bookHealthcareTaker(taker: any) {
    const bookingData = {
      name: taker.name,
      email: taker.email,
      phone: taker.phone,
      specialty: taker.specialty,
      location: taker.location
    };

    this.http.post('http://localhost:3000/book', bookingData)
      .subscribe(
        (response: any) => {
          alert('Booking request sent successfully!');
        },
        (error: any) => {
          console.error('Error sending booking request:', error);
          alert('Failed to send booking request.');
        }
      );
  }

}
