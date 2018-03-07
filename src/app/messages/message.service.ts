import { Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { Subject } from "rxjs/Subject";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class MessageService {
    // messagesChanged = new Subject<Message[]>();
    editedMessage = new EventEmitter<Message>();
    private messages:Message[]=[];

    constructor(
        private _http:Http
    ){}

    addMessage(message:Message){
        const body = JSON.stringify(message);
        const headers = new Headers({['Content-Type']:'application/json'})
        return this._http.post('http://localhost:3000/api/message',body,{headers:headers})
                .map((response:Response)=>{
                    return response.json();
                })
                .catch(
                     (err:Response)=> Observable.throw(err.json())
                );
    }
    pushMessage(message:Message){
        this.messages.push(message);
    }

    getMessage(){
        return this._http.get('http://localhost:3000/api/messages')
                .map((response:Response)=>{
                    const messages = response.json().obj;
                    var transformedMessages:Message[]=[];
                    for(let message of messages){
                        transformedMessages.push(new Message(message.content,'Aditya',message._id,null));
                    }
                    this.messages = transformedMessages;
                    return transformedMessages;
                })
                .catch(
                    (err:Response)=> Observable.throw(err.json())
               )
                
    }

    editMessage(message:Message){
        this.editedMessage.emit(message);
    }

    updateMessage(message){
        return this._http.patch(`http://localhost:3000/api/message/${message.messageId}`,message)
                .map((respone:Response)=>{
                    return respone.json().message;
                })
                .catch(
                    (err:Response)=> Observable.throw(err.json())
               )
    }

    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
        
        return this._http.delete(`http://localhost:3000/api/message/${message.messageId}`)
                .map((response:Response)=>{
                    return response.json().message;
                })
                .catch(
                    (err:Response)=> Observable.throw(err.json())
               )
    }
}