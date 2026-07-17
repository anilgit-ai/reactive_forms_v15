import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input() label = '';

  @Input() control!: FormControl;

  @Input() accept = '*';

  @Input() maxSize = 5 * 1024 * 1024;

  @Input() hint = '';

  @Output() fileSelected = new EventEmitter<File>();

  fileName = 'No file selected';

  get isRequired(): boolean {
    return this.control?.hasValidator?.(Validators.required) ?? false;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];

    if (file.size > this.maxSize) {
      this.control.setErrors({
        fileSize: true,
      });

      return;
    }

    this.fileName = file.name;

    this.control.setValue(file);

    this.control.markAsDirty();

    this.control.markAsTouched();

    this.fileSelected.emit(file);
  }
}
