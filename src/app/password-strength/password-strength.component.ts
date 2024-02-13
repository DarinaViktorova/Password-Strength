import { Component, HostBinding, Input } from '@angular/core';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { BlockComponent } from '../block/block.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [PasswordInputComponent, BlockComponent, ReactiveFormsModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {

  passForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.passForm = this.fb.group({
      controlPassInput: new FormControl('')
    });
  }

  calculatePasswordStrength(password: string): string {

    const minLengthForPassword = 8;

    const letters = /[a-zA-Za-яА-Я]/.test(password);
    const numbers = /[0-9]/.test(password);
    const symbols = /[_!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length === 0)  return 'none';
    else if (password.length < minLengthForPassword) return 'passwordTooShort';
    else if (letters && numbers && symbols) return 'strong';
    else if (letters && (numbers || symbols) || numbers && symbols) return 'medium';
    else if (symbols || letters || numbers) return 'weak'
    else return 'none';
  }

  setBodyBackgroundColor(color: string): void {
    document.body.style.backgroundColor = color;
  }
}
