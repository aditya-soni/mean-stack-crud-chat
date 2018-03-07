import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';
// import { MessageService } from "./message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers : []
})
export class MessageComponent implements OnInit {
  @Input() message:Message;
  // @Output() editClicked = new EventEmitter<String>();
  constructor(
    private msgService:MessageService
  ) { }

  ngOnInit() {
  }
  
  onEdit(){
    this.msgService.editMessage(this.message);
  }

  onDelete(message:Message){
    // this.msgService.deleteMessage(message);
    this.msgService.deleteMessage(message).subscribe(
      (response)=>{console.log(response)},
      err => console.error(err)
    )
  }

}
