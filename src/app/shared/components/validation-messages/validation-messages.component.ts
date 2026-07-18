import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { VALIDATION_MESSAGES } from 'src/app/shared/constants/validation-messages';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss'],
})
export class ValidationMessagesComponent {
  @Input() control: AbstractControl | null = null;
  @Input() label = '';
  get errorMessage(): string {
    const errors: ValidationErrors | null =
      this.control?.errors ?? this.control?.parent?.errors ?? null;

    if (!errors) {
      return '';
    }
    if (errors['required']) {
      return VALIDATION_MESSAGES.required(this.label);
    }
    if (errors['email']) {
      return VALIDATION_MESSAGES.email();
    }
    if (errors['mobile']) {
      return VALIDATION_MESSAGES.mobile();
    }
    if (errors['pan']) {
      return VALIDATION_MESSAGES.pan();
    }
    if (errors['aadhaar']) {
      return VALIDATION_MESSAGES.aadhaar();
    }
    if (errors['passwordStrength']) {
      return VALIDATION_MESSAGES.passwordStrength();
    }
    if (
      errors['passwordMismatch'] &&
      this.control?.parent?.get('confirmPassword') === this.control
    ) {
      return VALIDATION_MESSAGES.passwordMismatch();
    }
    if (errors['age']) {
      return VALIDATION_MESSAGES.age(errors['age'].requiredAge);
    }
    if (errors['fileSize']) {
      return VALIDATION_MESSAGES.fileSize();
    }
    if (errors['fileType']) {
      return VALIDATION_MESSAGES.fileType(errors['fileType'].allowedTypes);
    }
    if (errors['minlength']) {
      return VALIDATION_MESSAGES.minlength(
        this.label,
        errors['minlength'].requiredLength,
      );
    }
    if (errors['maxlength']) {
      return VALIDATION_MESSAGES.maxlength(
        this.label,
        errors['maxlength'].requiredLength,
      );
    }
    if (errors['min']) {
      return VALIDATION_MESSAGES.min(this.label, errors['min'].min);
    }
    if (errors['max']) {
      return VALIDATION_MESSAGES.max(this.label, errors['max'].max);
    }
    if (errors['pattern']) {
      return VALIDATION_MESSAGES.pattern(this.label);
    }
    return VALIDATION_MESSAGES.invalid();
  }
}
