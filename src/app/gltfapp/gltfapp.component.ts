import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { environment } from 'src/environments/environment';
//import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-gltfapp',
  templateUrl: './gltfapp.component.html',
  styleUrls: ['./gltfapp.component.css']
})
export class GLTFAppComponent implements OnInit {
  @Input() user_name:string;
  email = null;
  id : any;
  imgpath:string;
  username:string;

  constructor(/*private http: HttpClient, */private router: Router, private auth: AuthService, private appcmp: AppComponent) { 
    auth.getUser().subscribe((user) => {
      //console.log("USER IS:", user);
      this.email = user?.email;
      this.id = user?.uid;
      this.imgpath = user?.photoURL;
      this.user_name = user?.displayName;
      appcmp.userName = user?.displayName;
      //appcmp.username = '';
      //this.username = appcmp.username;
      console.log("USER IS:", this.user_name, appcmp.userName);

      if(!this.id) {
        this.router.navigateByUrl('/Login');
      }
    });
    
  }
  
  // Method to init the admin js file.
  public initAdminScript() {
    let body = <HTMLDivElement>document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/js/sb-admin-2.min.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {
    // Method to init the admin js file.
    this.initAdminScript();
  }

  async handleSignOut() {
    try {
      await this.auth.signOut();
      this.router.navigateByUrl("/Login");
      this.email = null;
    } catch (error) {
      
    }
  }

}
