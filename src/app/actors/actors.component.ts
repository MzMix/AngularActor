import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/interfaces/actor.interface';
import { ActorService } from '../services/actor.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorServics: ActorService){}

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void{
    this.actorServics.getAllActors().subscribe((actors) => (this.actors = actors));
  }

  delete(actor: Actor): void {
    this.actors = this.actors.filter((a) => a !== actor);

    this.actorServics.deleteActor(actor.id).subscribe();
  }

}
