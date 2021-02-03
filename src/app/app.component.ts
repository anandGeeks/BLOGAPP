import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Blogger';
  logedIn="not"
  constructor(private authService:AuthService,private cdr: ChangeDetectorRef){}
  logout(){
    localStorage.removeItem("user")
  }
  ngOnInit(): void {
    this.authService.data$.subscribe((res:any)=>{
      console.log(res);
      this.logedIn=res
    })
   
    //if(this.logedIn=="loggedin success"){
    // let x =JSON.parse(localStorage.getItem("user"))
    // console.log(x);
    // this.logedIn="loggedin success"
    //}
    
  }
  ngAfterViewChecked(){
    this.authService.data$.subscribe((res:any)=>{
      console.log(res);
      this.logedIn=res
    })
   
    this.cdr.detectChanges();
 }
}
