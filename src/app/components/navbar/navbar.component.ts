import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean;
  LoggedInUser:string;
  showRegister:boolean;
  constructor(
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.LoggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
    })
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You have successfully logged out', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
        this.showRegister = true;
  }

}
