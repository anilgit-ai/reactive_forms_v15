import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function aadhaarValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value || '').toString().replace(/\s/g, '');

    if (!value) {
      return null;
    }

    // 12 digits, first digit cannot be 0 or 1
    const regex = /^[2-9][0-9]{11}$/;

    return regex.test(value) ? null : { aadhaar: true };
  };
}
