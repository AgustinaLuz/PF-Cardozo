import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent {

  nameControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]
  );
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]
  );

  registerForm = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
  });
}
