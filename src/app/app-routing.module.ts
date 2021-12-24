import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DepositsComponent } from './deposits/deposits.component';
//import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


import { AuthGuard } from './_helpers';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate:[AuthGuard]}, 
  {path:'home', component:HomeComponent, },
  {path: 'registration', component: RegistrationComponent, canActivate:[AuthGuard]},
  //{path: 'fund-transfer', component: FundTransferComponent},
  //{path: 'deposits', component: DepositsComponent},
  { path: 'login', component: LoginComponent },
 
  
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
