import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RegistrationComponent } from './registration/registration.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'blogs',component:BlogsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'home',component:HomeComponent,
    canActivate: [AuthGuard] 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
