import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/interfaces/actor.interface';
import { ActorService } from '../services/actor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actors!: Actor[];

  constructor(private actorServics: ActorService){}

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void{
    this.actorServics.getAllActors().subscribe((actors)=>(this.actors = actors.sort((a,b) => b.rating - a.rating).splice(0,6)));
  }

}
