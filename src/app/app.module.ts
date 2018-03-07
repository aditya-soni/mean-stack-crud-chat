import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages/message/message.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageInputComponent } from './messages/message-input/message-input.component';
import { MessageService } from './messages/message.service';
import { MessagesComponent } from './messages/messages.component';
import { AuthentionComponent } from './auth/authention/authention.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogOutComponent } from "./auth/logout.component";


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessagesListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthentionComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
