import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm
import { SellerService } from '../sellerservice/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './seller-doctor.component.html',
  styleUrl: './seller-doctor.component.css'
})
export class SellerDoctorComponent {
  addDoctorMsg: string | undefined;
  constructor(private seller: SellerService, private router: Router) {}
// component.ts
addDoctor(data: any, form: NgForm) {
  console.warn("Doctor data received:", data);
  this.seller.addDoctor(data).subscribe((result: any) => {
    if (result) {
      this.addDoctorMsg = "Doctor added successfully";
      console.warn(result);
      form.reset();  // Reset the form fields after successful addition
    }
    setTimeout(() => (this.addDoctorMsg = undefined), 3000);
  });
}


}
