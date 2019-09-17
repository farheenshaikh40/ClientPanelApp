import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName:'',
    email: '',
    phone:'',
    balance: 0,
  }
  disableBalanceOnAdd: boolean = true
  constructor(
    private clientService: ClientService,
    private flashMessagesService: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    console.log(value, valid)
    if(this.disableBalanceOnAdd){
      value.balance = 0
    }
    if(!valid){
      //if form is not valid
      this.flashMessagesService.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['add-client'])
    }else{
      this.clientService.newClient(value)
      this.flashMessagesService.show('New Client added', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/'])
    }
  }

}
