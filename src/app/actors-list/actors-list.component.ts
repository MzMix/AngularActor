import { Component, Input } from '@angular/core';
import { Actor } from 'src/interfaces/actor.interface';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent {
  @Input() actor! : Actor;
}
