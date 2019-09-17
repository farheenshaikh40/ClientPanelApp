import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientRef: AngularFireList<any>;
  clients: Observable<any[]>;
  client:Observable<any>
  constructor(private db: AngularFireDatabase) { 
    this.clientRef = db.list('clients');
    // Use snapshotChanges().map() to store the key
    this.clients = this.clientRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getClients(){
    return this.clients
  }

  newClient(client: Client){
    this.clientRef.push(client);
  }
}
