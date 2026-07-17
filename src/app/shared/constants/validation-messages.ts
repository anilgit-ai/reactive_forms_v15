export const VALIDATION_MESSAGES = {
  required: (label: string): string => `${label} is required.`,

  email: (): string => 'Please enter a valid email address.',

  mobile: (): string => 'Please enter a valid 10-digit mobile number.',

  pan: (): string => 'Please enter a valid PAN number.',

  aadhaar: (): string => 'Please enter a valid 12-digit Aadhaar number.',

  passwordStrength: (): string =>
    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.',

  passwordMismatch: (): string => 'Passwords do not match.',

  minlength: (label: string, length: number): string =>
    `${label} must be at least ${length} characters.`,

  maxlength: (label: string, length: number): string =>
    `${label} cannot exceed ${length} characters.`,

  min: (label: string, value: number): string =>
    `${label} must be at least ${value}.`,

  max: (label: string, value: number): string =>
    `${label} cannot be greater than ${value}.`,

  pattern: (label: string): string => `${label} format is invalid.`,

  invalid: (): string => 'Invalid value.',
};
