import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GLTFAppComponent } from '../gltfapp.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userObj:any = {};
  info:string;
  username:string;
  
  constructor(private router: Router, private gltfcmp: GLTFAppComponent) {
    //this.username = gltfcmp.user_name;
    //console.log(this.username, gltfcmp.user_name);
   }

  ngOnInit(): void {
    /*this.userObj = JSON.parse(localStorage.getItem('UserInfo'));
   // console.log("aa", this.userObj);
    this.username = this.userObj.name;
    let imgpath = this.userObj.picture;
    let userId = this.userObj.id;

    if(!userId) {
      this.router.navigateByUrl('/Login');
    }

    let username = document.getElementsByClassName('username')[0];
    let dashboard_user = document.getElementsByClassName('dashboard_user')[0];
    if(username) username.innerHTML = this.username;
    if(dashboard_user) dashboard_user.innerHTML = 'Welcome '+this.username;

    let imgprofile = document.getElementsByClassName('img-profile')[0];
    if(imgprofile) imgprofile.setAttribute('src', imgpath);*/

  }

}
