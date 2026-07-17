import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label = '';

  @Input() control!: FormControl;

  @Input() binary = true;

  @Input() disabled = false;

  @Input() hint = '';

  get isRequired(): boolean {
    return (
      this.control?.hasValidator?.(Validators.required) ??
      this.control?.hasValidator?.(Validators.requiredTrue) ??
      false
    );
  }
  private static nextId = 0;

inputId = `checkbox-${CheckboxComponent.nextId++}`;
}
