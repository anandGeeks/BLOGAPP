import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  wrong:string="";
  logedIn;
  constructor(private fb:FormBuilder,private router:Router,private authService:AuthService){
    this.loginform = fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  ngOnInit(): void {
  }
  onSubmit(){
    let curentUser=this.loginform.value
    var retrievedData = JSON.parse(localStorage.getItem("registeredUsers"))
    console.log(retrievedData);
    for(let i=0; i<retrievedData.length; i++){
      if(curentUser.email===retrievedData[i].email && curentUser.password === retrievedData[i].password){
        console.log("loggedin success")
        this.authService.emitdata("loggedin success");
        localStorage.setItem("user",JSON.stringify(this.loginform.value))
        this.router.navigate(['/home']);
        break
      }else{
        this.wrong = "wrong user";
        console.log("Wrong user details");
      }
    }
   
  }
  onRegister(){
    this.router.navigate(['/registration']);
  }

}


