import { Routes } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
//import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
  //  {path: '', component: PasswordComponent, pathMatch: 'full'}
    {path: '', component: PasswordStrengthComponent, pathMatch: 'full'}
];
