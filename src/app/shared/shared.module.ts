import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { PasswordComponent } from './components/password/password.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';



@NgModule({
  declarations: [
    InputComponent,
    PasswordComponent,
    TextareaComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    DatepickerComponent,
    ValidationMessagesComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
