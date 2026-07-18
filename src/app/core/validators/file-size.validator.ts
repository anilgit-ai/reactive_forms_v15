import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileSizeValidator(maxSizeInBytes: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File | null;

    if (!file) {
      return null;
    }

    return file.size <= maxSizeInBytes
      ? null
      : {
          fileSize: {
            maxSize: maxSizeInBytes,
            actualSize: file.size,
          },
        };
  };
}
