import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe( client => {  
      if(client.balance > 0){
        this.hasBalance = true
      }
      this.client = client;
      console.log(this.client)
    })
  }
  
  updateBalance(id:string){
    this.clientService.updateClient(this.id, this.client)
    this.flashMessagesService.show('Balance Updated', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/client-details/'+this.id])
      this.showBalanceUpdateInput = false
  }

  onDeleteClick(){
    if(confirm("Are You Sure to delete this client?")){
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client Deleted Sucessfully!', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/'])
    }
  }
}
