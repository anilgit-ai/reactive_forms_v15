import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function mobileValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const regex = /^[6-9]\d{9}$/;

    return regex.test(value) ? null : { mobile: true };
  };
}
