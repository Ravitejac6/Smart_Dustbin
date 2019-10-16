import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { resolve, reject } from 'q';
//import{FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database-deprecated';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authState:FirebaseAuthState = null;
  constructor(private db: AngularFireDatabase,
    private router:Router,private afAuth:AngularFireAuth) { }
//864419268441-hn0dci87j0qtd0h24ntrtnt92j4mh9ua.apps.googleusercontent.com
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      })
    })
  }

  // anonymousLogin() {
  //   return this.af.auth.login({
  //     provider: AuthProviders.Anonymous,
  //     method: AuthMethods.Anonymous,
  //   })
  //   .then(() => console.log("successful login") )
  //   .catch(error => console.log(error));
  // }
  
  anonymousLogin(){
    return new Promise<any>((resolve,reject)=>{
      let s =firebase.auth().signInAnonymously();
      console.log(s);
    })
  }
  
  // signInAnonymously(): Promise<firebase.auth.UserCredential>; src:firebase index.d.ts
}
