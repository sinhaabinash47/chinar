import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HelpComponent } from './help/help.component';
import { HighToLowComponent } from './high-to-low/high-to-low.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'search/searchIteam', component:HomeComponent},
  {path: 'Login-Register', component: LoginRegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'high-to-low', component: HighToLowComponent},
  { path: 'Delivery', component: DeliveryComponent},
  { path: 'signup', component:SignupComponent},
  { path:'help', component:HelpComponent},
  // { path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
