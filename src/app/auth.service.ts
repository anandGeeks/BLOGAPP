import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data = new Subject();
  emitdata(x: any){
    this.data.next(x);
  }
  public data$ = this.data.asObservable();
  constructor() { }
  public isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    // Check whether the token is expired and return
    if(user){
      return true
    }else{
      return false
    }
    // true or false
   
  }
  authUser(user:any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray = JSON.parse(localStorage.getItem('Users'));
      console.log('users array data')
      console.log(UserArray);
    }
    return UserArray.find(p => p.email == user.email && p.password == user.password);
  }
}
