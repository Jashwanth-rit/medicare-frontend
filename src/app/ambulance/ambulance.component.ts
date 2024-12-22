import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from '../sellerservice/seller.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';


import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID, OnInit } from '@angular/core';


 // Import NgForm



@Component({
  selector: 'app-ambulance',
  standalone: true,
  imports: [NgbModule, CommonModule, CartComponent,FormsModule, HttpClientModule],
  templateUrl: './ambulance.component.html',
  styleUrl: './ambulance.component.css'
})
export class AmbulanceComponent {

  ambulances: any[] = []; // Array to hold ambulance data

   medicalShops: any[] = [];
    error: string | null = null;
    healthcareTakers: any[] = [];
  
    constructor(private seller: SellerService, private router: Router,private http: HttpClient, 
      @Inject(PLATFORM_ID) private platformId: Object) {}
  

  ngOnInit(): void {

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
    // this.getAmbulances();
  }

  getAmbulances(): void {
    this.seller.getAmbulances().subscribe(
      (res: any) => {
        this.ambulances = res;
        console.log('Ambulances fetched successfully:', this.ambulances);
      },
      (error: any) => console.error('Error fetching ambulances:', error)
    );
  }

  
  fetchNearbyMedicalShops(latitude: number, longitude: number): void {
    const maxDistance = 3000; // Example: 3 km
    this.seller.getNearbyambulance(latitude, longitude, maxDistance).subscribe({
      next: (data) => (this.medicalShops = data),
      error: (err) => {
        console.error('Error fetching nearby medical shops:', err);
        this.error = 'Failed to fetch nearby medical shops.';
      },
    });
  }
  bookAmbulance(ambulance: any) {
    alert(`Booking ambulance ${ambulance.vehicleNumber}`);
    this.router.navigate(['/']); // Navigate to the home page
  }

}
