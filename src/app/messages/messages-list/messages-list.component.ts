import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css'],
  providers : []
})
export class MessagesListComponent implements OnInit {
  messages : Message[] = [
  ]
  constructor(
    private messageService:MessageService
  ) { }

  ngOnInit() {
    this.messageService.getMessage()
          .subscribe(
            (messages:Message[])=>{
              this.messages = messages
            }
          )
    // this.messageService.messagesChanged.subscribe(
    //   (messages)=>{
    //     this.messages = messages  
    //   }
    // )
  }

}
