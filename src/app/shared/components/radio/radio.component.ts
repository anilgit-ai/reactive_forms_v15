import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormOption } from '../../models/form-action';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  @Input() label = '';

  @Input() control!: FormControl;

  @Input() options: FormOption[] = [];

  @Input() direction: 'horizontal' | 'vertical' = 'horizontal';

  @Input() hint = '';

  private static nextId = 0;

  readonly groupId = `radio-group-${RadioComponent.nextId++}`;

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }
}
