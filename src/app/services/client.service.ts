import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientRef: AngularFireList<any>;
  client: Observable<any>;
  constructor(private db: AngularFireDatabase) { 
    this.clientRef = db.list('clients');
    // Use snapshotChanges().map() to store the key
    this.client = this.clientRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
}
