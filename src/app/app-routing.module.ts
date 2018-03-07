import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { AuthentionComponent } from './auth/authention/authention.component';
import { MessagesComponent } from './messages/messages.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogOutComponent } from './auth/logout.component';


const appRoutes:Routes = [
  { path: '', redirectTo:'messenger', pathMatch:'full' },
  { path: 'auth', component: AuthentionComponent, children : [
    { path: '', redirectTo:'login',pathMatch:'full' },
    { path: 'login', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'logout', component: LogOutComponent },
  ] },
  { path: 'messenger', component: MessagesComponent },
  { path: '**', redirectTo:'login' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
