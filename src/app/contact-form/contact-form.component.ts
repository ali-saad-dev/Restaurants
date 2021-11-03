import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    message: new FormControl('')
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
