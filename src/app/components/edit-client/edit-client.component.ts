import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/interfaces/client';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  client : Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }

  disableBalanceOnEdit: boolean = true;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.clientService.getClient(this.id).subscribe( client => {
      this.client = client
    })

    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    console.log(value, valid)
    if(!valid){
      //if form is not valid
      this.flashMessagesService.show('Please fill in all the fields', {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['edit-client/'+this.id])
    }else{
      this.clientService.updateClient(this.id, value)
      this.flashMessagesService.show('Client Updated', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/client-details/'+this.id])
    }
  }

}
