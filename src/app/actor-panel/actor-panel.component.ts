import { Component, Input } from '@angular/core';
import { Actor } from 'src/interfaces/actor.interface';

@Component({
  selector: 'app-actor-panel',
  templateUrl: './actor-panel.component.html',
  styleUrls: ['./actor-panel.component.css']
})
export class ActorPanelComponent {
  @Input() actor! : Actor;
}
