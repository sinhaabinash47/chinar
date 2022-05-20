import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './login-register.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatCardContent } from '@angular/material/card';




@NgModule({
  declarations: [
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,MatCardContent, MatCardModule,
    MatTabsModule,MatInputModule,MatButtonModule,MatIconModule,MatSlideToggleModule,FormsModule
  ]
})
export class LoginRegisterModule { }
