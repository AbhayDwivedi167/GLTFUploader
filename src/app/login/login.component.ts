import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NgForm, NgModel } from '@angular/forms';
import { User } from './../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor(
    private auth: AuthService,
    private router: Router,
    private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  // onSubmit(loginform: NgForm) {
  //   const { email, password } = loginform.form.value;

  //   this.auth.signIn(email, password)
  //   .then((res)=>{
      
  //     this.router.navigateByUrl('/GLTFApplication/Home');
  //   })
  //   .catch((err)=>{
      
  //   });
  // }

  //Methdo to login with google
  loginWithGoogle(){
    this.auth.loginWithGoogle();
  }

}
