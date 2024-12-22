import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from '../../sellerservice/seller.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../../cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



import { NgForm } from '@angular/forms';  // Import NgForm

import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule,CommonModule,CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private seller: SellerService,private router : Router,private http: HttpClient, 
    @Inject(PLATFORM_ID) private platformId: Object,  private config: NgbCarouselConfig ) {  this.config.showNavigationArrows = true;
      this.config.showNavigationIndicators = true; }
  products:any;
  delmsg:any;
cartlength : any;
carousel:any;
medicalShops: any[] = [];
error: string | null = null;
healthcareTakers: any[] = [];

  selectedShop: any = null;




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
    // this.getcaroul()
    // this.getprod();
    // this.seller.cartLength$.subscribe((length) => {
    //   this.cartlength = length;
    // });
   
  }
  details(id:any){
    console.warn("deatails called");

    this.router.navigate([`product-details/${id}`])
  }
  addToCart(product:any){
    console.warn("add to cart called");
    this.seller.addtocart(product).subscribe((res)=>{
      console.warn("product added");
      this.seller.updateCartLength(this.cartlength + 1);
      
    })
  }
  getcaroul(){
    this.seller.getslider().subscribe((res)=>{
      console.warn("carourl",res);
      this.carousel = res;
    });
    

  }
  viewProductDetails(productId: string): void {
    this.router.navigate(['/product-details', productId]);
  }


  fetchNearbyMedicalShops(latitude: number, longitude: number): void {
    const maxDistance = 3000; // Example: 3 km
    this.seller.getNearbyMedicalShops(latitude, longitude, maxDistance).subscribe({
      next: (data) => (this.medicalShops = data),
      error: (err) => {
        console.error('Error fetching nearby medical shops:', err);
        this.error = 'Failed to fetch nearby medical shops.';
      },
    });
  }
  
  viewShopProducts(shop: any): void {
    this.selectedShop = shop;
    this.carousel = shop.products.map((product: any) => ({
      url: product.url,
      name: product.name,
      description: product.description,
    }));
  }

  getprod(){
    this.seller.getproductshome().subscribe((res)=>{
      console.warn("products",res);
      this.products = res;
    });
}
}
