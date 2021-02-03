import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  text:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let u=JSON.parse(localStorage.getItem("user"))
    console.log(u);
  
  if(u.email){
    this.authService.emitdata("loggedin success");
  }
}
}
