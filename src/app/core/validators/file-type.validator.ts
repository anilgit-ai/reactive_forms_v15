import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileTypeValidator(allowedTypes: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File | null;

    if (!file) {
      return null;
    }

    const extension = file.name.split('.').pop()?.toLowerCase();

    if (!extension) {
      return {
        fileType: {
          allowedTypes,
        },
      };
    }

    return allowedTypes.map((type) => type.toLowerCase()).includes(extension)
      ? null
      : {
          fileType: {
            allowedTypes,
          },
        };
  };
}
