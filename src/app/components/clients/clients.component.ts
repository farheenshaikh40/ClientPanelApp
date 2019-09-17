import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any[];
  totalOwed:number;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    console.log('hey');
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
      this.getTotalOwed();  
    })
;
    // setTimeout(() => {this.getTotalOwed()},4000)
    // this.getClients(this.getTotalOwed)
  }

  getClients(callback){
    console.log('clients')
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
      callback();

    })
    // callback();
    console.log('done')
  }
  getTotalOwed(){
    console.log('owed')
    let total = 0;
    for(let i = 0; i < this.clients.length; i++){
      total += parseFloat(this.clients[i].balance)
    }
    console.log(total)
    this.totalOwed = total
  }

}
