import { Component, OnInit } from '@angular/core'; 
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('You are successfully logged in', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/'])
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login'])
      })
  }

}
