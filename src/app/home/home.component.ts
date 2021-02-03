import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let u=JSON.parse(localStorage.getItem("user"))
    console.log(u);
    
    if(u.email){
      this.authService.emitdata("loggedin success");
    }
  }

}
