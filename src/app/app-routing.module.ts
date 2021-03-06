import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
	{path:'register', component: RegisterComponent},
	{path:'users', component: UserComponent, canActivate:[LoginGuard]},
	{path:'login', component: LoginComponent},
	{path: 'accounts', component: AccountComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
