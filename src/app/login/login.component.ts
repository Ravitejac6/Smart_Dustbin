import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  items: Array<any>;
  constructor(public as :AuthService ,private route:Router) { }
  ngOnInit() {
    // this.as.getUsers().subscribe(data => {
    //   this.items = data.map(e => {
    //     console.log(e.payload.doc.data()); 
    //   })
    // });
  }

  link(){
    this.as.linkaccount();
  }
  logOut(){
    this.as.loggedOut().then( v=>{
      console.log(v);
    })
    this.route.navigate(['/register']);
  }

}
