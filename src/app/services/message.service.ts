import { Injectable } from '@angular/core';
import { Message } from 'src/interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];

  private date = new Date();

  add(message: string) {
    this.messages.push({
      text: message,
      timestamp: this.date.getTime()
    });
  }

  clear() {
    this.messages = [];
  }

  constructor() {}
}
