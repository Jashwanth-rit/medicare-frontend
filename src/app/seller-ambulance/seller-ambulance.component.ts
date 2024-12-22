import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm
import { SellerService } from '../sellerservice/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-ambulance',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './seller-ambulance.component.html',
  styleUrl: './seller-ambulance.component.css'
})
export class SellerAmbulanceComponent {
  addAmbulanceMsg: string | undefined;

  constructor(private seller: SellerService) {}

  // Function to add the ambulance
  addAmbulance(data: any, form: NgForm) {
    console.warn("Data received:", data);
    this.seller.addAmbulance(data).subscribe((result: any) => {
      if (result) {
        this.addAmbulanceMsg = "Ambulance added successfully";
        console.warn(result);
        form.reset(); // Reset the form fields after successful addition
      }
      setTimeout(() => this.addAmbulanceMsg = undefined, 3000);
    });
  }

}
