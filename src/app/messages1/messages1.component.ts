import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages1',
  templateUrl: './messages1.component.html',
  styleUrls: ['./messages1.component.css']
})
export class Messages1Component {
  constructor(public messageService: MessageService) {}
}
