import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFirestoreCollection} from 'angularfire2/firestore';
import { getRandomString } from 'selenium-webdriver/safari';
import {AngularFirestore} from '@angular/fire/firestore';
import{ Router} from '@angular/router';
//import{FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database-deprecated';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public  ref = firebase.database().ref();
  // userslist : AngularFireList<any>;
  // userArray : AngularFirestoreCollection<any>;
  constructor(private db: AngularFireDatabase,
    private router:Router,private afAuth:AngularFireAuth,private af:AngularFirestore) {}


    // searchUsers(searchValue){
    //   return this.af.collection('users',ref => ref.where('PENUGONDA NAGA VENKATA RAVITEJA', '==', searchValue)
    //     .where('PENUGONDA NAGA VENKATA RAVITEJA', '==', searchValue + '\uf8ff'))
    //     .snapshotChanges()
    // }

    public readonly ref = firebase.database().ref();

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
        //console.log(res.additionalUserInfo.profile['name']);
        var obj={
          data : res.additionalUserInfo.profile['name'],
          number : this.getRandomSpan().toString()
        }
        this.af.collection('users').add(obj);
        let val = "penugonda naga venkata raviteja";
        //console.log(this.ref.child("users"));
        console.log(typeof(val));
        var ref = firebase.database().ref("users/"+val);
        console.log(ref);
        ref.once("value",snapshot=>{
          if(snapshot.child("data").exists()){
            console.log("Exists");
          }
        });
        // this.ref.child("users").orderByChild("data").equalTo("PENUGONDA NAGA VENKATA RAVITEJA").once("value",snapshot => {
        //   console.log(snapshot);
        //   if (snapshot.exists()){
        //     const userData = snapshot.val();
        //     console.log("exists!", userData);
        //   }
        // });
        //console.log("Not Exists!");
        this.router.navigate(['/login']);
      })
      
    })
    
  }

  getUsers() {
    return this.af.collection('users').snapshotChanges();
  }
  
  

  getRandomSpan() {
    return Math.floor((Math.random()*6)+1);
  }
  anonymousLogin(){
    return new Promise<any>((resolve,reject)=>{
      let s =firebase.auth().signInAnonymously();
      console.log(s);
      console.log(this.getRandomSpan());
    // return this.db.collection('users').add({

    })
  }

  

  
  // signInAnonymously(): Promise<firebase.auth.UserCredential>; src:firebase index.d.ts
}
