import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { PasswordComponent } from './components/password/password.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { DatePickerComponent } from './components/datepicker/datepicker.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
const FORM_COMPONENTS = [
  ValidationMessagesComponent,
  InputComponent,
  PasswordComponent,
  DropdownComponent,
  DatePickerComponent,
  TextareaComponent,
  CheckboxComponent,
  RadioComponent,
];
@NgModule({
  declarations: [
    InputComponent,
    PasswordComponent,
    TextareaComponent,
    DropdownComponent,
    CheckboxComponent,
    RadioComponent,
    DatePickerComponent,
    ValidationMessagesComponent,
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  exports: [...FORM_COMPONENTS],
})
export class SharedModule {}
