export interface FormOption<T = any> {
  label: string;
  value: T;
  disabled?: boolean;
}