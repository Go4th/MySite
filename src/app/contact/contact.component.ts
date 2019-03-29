import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: any;

  showSuccess: boolean = false;
  showError: boolean = true;
  responseText: string = "";
  responseClass: string = "";

  constructor(private _fb: FormBuilder) {
    this.contactForm = _fb.group({
      "fName": [null, Validators.required],
      "lName": [null, Validators.required],
      "phone": [null],
      "email": [null, Validators.required],
      "comments": [null, Validators.required]
     })
   }

  
 
   submitContact(formValues){
    emailjs.sendForm('gmail','bgo4th', '#contactForm', 'user_lxPO730KrU1f636FqoSBs')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.responseText = "Your e-mail has been sent successfully."
        this.responseClass = "SUCCESS";
        setTimeout(()=>{
          this.responseText = "";
          this.contactForm.reset();
        },1500)
        

      }, (err) => {
        console.log('FAILED...', err);
        this.responseText = "There was an error sending your email."
        this.responseClass = "ERROR";
        setTimeout(()=>{
          this.responseText = "";
          this.contactForm.reset();
        },1500)
      });
  }

  ngOnInit() {
  }

}
