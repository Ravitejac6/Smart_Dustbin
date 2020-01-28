import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './user/user.component';


export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path:'login:id', component:UserComponent },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    //{ path: 'user', component: UserComponent,  resolve: { data: UserResolver}}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(rootRouterConfig)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
