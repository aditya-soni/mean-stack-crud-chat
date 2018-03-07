import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import 'rxjs/Rx';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  message:Message;
  constructor(
    private msgService:MessageService
  ) { }

  ngOnInit() {
    this.msgService.editedMessage.subscribe(
      (message:Message)=>{
        this.message = message;
      }
    )
  }

  onSubmit(f:NgForm){
    if(!this.message){
      // creating
      let newMsg = new Message(f.value['content'],'aditya');
      this.msgService.addMessage(newMsg)
        .subscribe(
          (data)=>{
            // console.log(data)
            const msgToPush = new Message(data.obj.content,'Aditya',data.obj._id)
            this.msgService.pushMessage(msgToPush);
          },
          err => console.error(err)
        )       

    } else{
      // editing
      this.message.content = f.value.content;

      this.msgService.updateMessage(this.message)
          .subscribe(
            (response)=>{
              console.log(response)
            },
            err=>{
              console.error(err)
            }
          )
          this.message = null;
    }
    f.reset();
  }
}
