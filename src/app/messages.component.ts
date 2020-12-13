import { Component } from "@angular/core";

@Component({
  selector:'messages',
  template: `
    <div *ngFor="let msg of messages">
      {{msg.text}} 
    </div>`
})
export class MessageComponent {
  messages = [{
    text: 'sometext',
    owner: 'Tim'
  },
  {
    text: 'sometext again',
    owner: 'Timmy'
  }];
}