import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormOption } from '../../models/form-action';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() label = '';

  @Input() placeholder = 'Select';

  @Input() control!: FormControl;

  @Input() options: FormOption[] = [];

  

  @Input() filter = true;

  @Input() showClear = true;

  @Input() disabled = false;

  @Input() emptyMessage = 'No records found';

  @Input() hint = '';

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }
}
