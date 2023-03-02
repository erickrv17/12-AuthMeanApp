import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `
  ]
})
export class DashboardComponent {
  
  constructor( private router: Router,
               private authS: AuthService ) { }

  get user(){
    return this.authS.user;
  }

  logout(){
    //console.log('Logout');
    this.router.navigateByUrl('/auth');
  }
}
