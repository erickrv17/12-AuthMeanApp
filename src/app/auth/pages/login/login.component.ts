import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor( private fb: FormBuilder,
               private router: Router,
               private authS: AuthService) { }

  login(){
    console.log(this.myForm.value);
    //console.log(this.myForm.valid);
    const {email, password} = this.myForm.value;
    this.authS.login(email,password)
      .subscribe(ok => {
        //console.log(resp);
        if (ok) {
          this.router.navigateByUrl('/dashboard');
        }else{
          //TODO: Show Error message
        }
      }
    );
    //this.router.navigateByUrl('/dashboard');
  }
}
