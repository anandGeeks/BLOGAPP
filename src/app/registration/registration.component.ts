import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationform:FormGroup;
  printData:any=[];
  FirstName="";
  LastName="";
  //user:any={};
  constructor(private fb:FormBuilder,private regService:RegistrationService) { 
    this.registrationform = fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  onRegistration(){
    let registeredData=[]
    registeredData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    if(registeredData.length==0){
      registeredData.push(this.registrationform.value)
      localStorage.setItem('registeredUsers',JSON.stringify(registeredData));
    }else{
      for (let i in registeredData){
        if((this.registrationform.value.email!=registeredData[i].email)){
          registeredData.push(this.registrationform.value)
          localStorage.setItem('registeredUsers',JSON.stringify(registeredData));
        }else{
          console.log("User is alredy existing");
        }
      }
     
    }
    this.printData = registeredData;
    this.registrationform.reset();
  }
  delete(data){
    localStorage.removeItem(data);
  }
}
