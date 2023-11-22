import { Component } from '@angular/core';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  formData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    comment: '',
  };

  formItems: FormData[] = [];

  submitToConsole() {
    console.log('Form Data:', this.formData);
    this.formItems.push({ ...this.formData });
    this.clearForm();
  }

  clearForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      comment: '',
    };
  }

  constructor() {}
}
