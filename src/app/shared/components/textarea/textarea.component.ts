import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() label = '';

  @Input() placeholder = '';

  @Input() control!: FormControl;

  @Input() hint = '';

  @Input() rows = 4;

  @Input() cols = 30;

  @Input() autoResize = true;

  @Input() disabled = false;

  @Input() maxlength: number | null = null;

  @Input() minlength: number | null = null;

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }

  get currentLength(): number {
    return this.control?.value?.length ?? 0;
  }
}
