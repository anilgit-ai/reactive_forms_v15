import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @Input() label = '';

  @Input() placeholder = '';

  @Input() control!: FormControl;

  @Input() toggleMask = true;

  @Input() feedback = false;

  @Input() maxlength?: number;

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }
}
