import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
//import {AngularFire2} from '@angular/fire/angularfire2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(//private af: AngularFire2,
    private db: AngularFireDatabase,
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

  // doRegister(value){
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(res => {
  //       resolve(res);
  //     }, err => reject(err))
  //   })
  // }
  
}
