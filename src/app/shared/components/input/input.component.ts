import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label = '';

  @Input() placeholder = '';

  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' =
    'text';

  @Input() control!: FormControl;

  @Input() readonly = false;

  @Input() disabled = false;

  @Input() maxlength: number | null = null;

  @Input() minlength: number | null = null;

  @Input() hint = '';

  @Input() autocomplete = 'off';

  @Input() autofocus = false;

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }
}
