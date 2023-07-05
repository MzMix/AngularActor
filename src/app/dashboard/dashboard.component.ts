import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/interfaces/actor.interface';
import { ActorService } from '../services/actor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actors$!: Observable<Actor[]>;

  constructor(private actorServics: ActorService){}

  ngOnInit(): void {
    this.getActors();
  }

  getActors(): void{
    this.actors$ =  this.actorServics.getAllActors();
  }

}
