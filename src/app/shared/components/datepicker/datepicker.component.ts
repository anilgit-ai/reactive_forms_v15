import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatePickerComponent {
  @Input() label = '';

  @Input() placeholder = 'Select Date';

  @Input() control!: FormControl;

  @Input() hint = '';

  @Input() disabled = false;

  @Input() showIcon = true;

  @Input() dateFormat = 'dd/mm/yy';

  @Input() minDate?: Date;

  @Input() maxDate?: Date;

  @Input() showButtonBar = false;

  @Input() readonlyInput = false;

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }
}
