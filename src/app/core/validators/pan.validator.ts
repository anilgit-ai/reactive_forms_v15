import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function panValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    return regex.test(value.toUpperCase()) ? null : { pan: true };
  };
}
