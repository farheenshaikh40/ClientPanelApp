import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData), err => reject(err))
    })
  }

  getAuth(){
    // from stackOverflow: stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
    return this.afAuth.authState.pipe(map(auth => auth))
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  register(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData), err => reject(err))
    })

  }
}
