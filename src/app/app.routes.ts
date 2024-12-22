import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { SellerComponent } from './Seller/seller/seller.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { sellerauthGuard } from './seller.auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { SearchProductsComponent } from './search-products/search-products.component';
// import { userAuthGuard } from './user-auth.guard';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchSellerComponent } from './search-seller/search-seller.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { PhysicalComponent } from './physical/physical.component';
import { MentalComponent } from './mental/mental.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { PoliceComponent } from './police/police.component';
import { FireservicesComponent } from './fireservices/fireservices.component';
import { PregnencyComponent } from './pregnency/pregnency.component';
import { ReminderComponent } from './reminder/reminder.component';
import { DonateComponent } from './donate/donate.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { SellerAmbulanceComponent } from './seller-ambulance/seller-ambulance.component';
import { SellerDoctorComponent } from './seller-doctor/seller-doctor.component';
import { SellerPatientComponent } from './seller-patient/seller-patient.component';
import { SellerHealthcareComponent } from './seller-healthcare/seller-healthcare.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'physical',
        component:PhysicalComponent
    },
    {
        path:'mental',
        component:MentalComponent
    },
    {
        path:'suggestions',
        component:SuggestionComponent
    },
    {
        path:'ambulance',
        component:AmbulanceComponent
    },
    {
        path:'add-ambulance',
        component:SellerAmbulanceComponent
    },
    {
        path:'add-doctor',
        component:SellerDoctorComponent
    },
    {
        path:'add-patient',
        component:SellerPatientComponent
    },
    {
        path:'add-healthcare',
        component:SellerHealthcareComponent
    },
    {
        path:'ambulance',
        component:AmbulanceComponent
    },
    {
        path:'healthcare',
        component:HealthcareComponent
    },
    {
        path:'police',
        component:PoliceComponent
    },
    {
        path:'pregnency',
        component:PregnencyComponent
    },
    {
        path:'reminder',
        component:ReminderComponent
    },
    {
        path:'donate',
        component:DonateComponent
    },
    {
        path:'doctor-details/:id',
        component:DoctorDetailsComponent
    },
    {
        path:'fire',
        component:FireservicesComponent
    },
    {
        path:'precautions',
        component:PrecautionComponent
    },
    {
        path:'',
        component:MainHomeComponent
    },
 
    {
        path:'seller',
        component:SellerComponent
    },
    {
        path:'seller-home',
        component:SellerHomeComponent,
        // canActivate:[sellerauthGuard]
    },
    {
        path:'seller-add',
        component:SellerAddProductComponent,
        // canActivate:[sellerauthGuard]
    },
    {
        path:'update-product/:id',
        component:ProductUpdateComponent,
       
    },
    {
        path:'product-details/:id',
        component:DetailsComponent,
      
    },
    {
        path:'cart',
        component:CartComponent,
       
    },
    {
        path:'search-products/:query',
        component:SearchProductsComponent,
        
    },
    {
        path:'search-seller/:query',
        component:SearchSellerComponent,
       
    },
    {
        path:'buy',
        component:BuyProductComponent,
        
    },
    {
        path:'orders',
        component:OrdersComponent,
       
    },
    {
        path:'user-login',
        component:UserLoginComponent,
        
    }

];
