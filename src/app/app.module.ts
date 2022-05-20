import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { StyleComponent } from './style/style.component';
import { ShowComponent } from './show/show.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HighToLowComponent } from './high-to-low/high-to-low.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SignupComponent } from './signup/signup.component';
import { HelpComponent } from './help/help.component';
import { ChatComponent } from './chat/chat.component';
import {MatTreeModule} from '@angular/material/tree';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    StyleComponent,
    ShowComponent,
    FooterComponent,
    LoginComponent,
    LoginRegisterComponent,
    HighToLowComponent,
    DeliveryComponent,
    SignupComponent,
    HelpComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,MatCardModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatButtonModule,
    AppRoutingModule,FormsModule,BrowserAnimationsModule,NgxStarRatingModule,MatIconModule,
    MatSlideToggleModule,MatTreeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
