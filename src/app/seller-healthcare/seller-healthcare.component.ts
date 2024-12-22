import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm
import { SellerService } from '../sellerservice/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-healthcare',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './seller-healthcare.component.html',
  styleUrl: './seller-healthcare.component.css'
})
export class SellerHealthcareComponent {
  addHealthcareMsg: string | undefined;
  constructor(private seller: SellerService, private router: Router) {}

  addHealthcareTaker(data: any, form: NgForm) {
    console.warn("Data received:", data);
    this.seller.addHealthcareTaker(data).subscribe((result: any) => {
      if (result) {
        this.addHealthcareMsg = "Healthcare taker added successfully";
        console.warn(result);
        form.reset();  // Reset the form fields after successful addition
      }
      setTimeout(() => (this.addHealthcareMsg = undefined), 3000);
    });
  }
  

}
