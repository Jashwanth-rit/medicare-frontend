import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';  // Import NgForm
import { SellerService } from '../sellerservice/seller.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './seller-patient.component.html',
  styleUrl: './seller-patient.component.css'
})
export class SellerPatientComponent {

  addPatientMsg: string | undefined;

constructor(private service: SellerService, private router: Router) {}

addPatient(data: any, form: NgForm) {
  console.warn("Data received:", data);
  // Format hospitals as an array
  data.hospitals = data.hospitals.split(',').map((hospital: string) => hospital.trim());
  
  this.service.addPatient(data).subscribe((result: any) => {
    if (result) {
      this.addPatientMsg = "Patient added successfully";
      console.warn(result);
      form.reset(); // Reset the form fields after successful addition
    }
    setTimeout(() => (this.addPatientMsg = undefined), 3000);
  });
}

}
