import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})

export class ObservablesComponent implements OnInit{
  authUserObs$: any;
  
  emailControl= new FormControl('', [Validators.required]);
  nameControl= new FormControl();

  authForm = new FormGroup({
    email: this.emailControl,
    name: this.nameControl,
  })


  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authUserObs$ = this.authService.authUserObs$;
    
  }

  login(): void {
    console.log(this.authForm.value);

    this.authService.login({
      ...(this.authForm.value as any),
      id: 54,
    }) 
  }
}
