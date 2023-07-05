import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActorService } from '../services/actor.service';
import { Actor } from 'src/interfaces/actor.interface';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css'],
})
export class AddActorComponent {
  constructor(private actorService: ActorService, private location: Location) {}

  add(name: string, imgUrl:string, rating: string): void {
    name = name.trim();
    if (!name) return;

    let ratingValue = parseInt(rating);
    if(ratingValue < 0) ratingValue = 0;
    if(ratingValue > 5) ratingValue = 5;

    this.actorService.addActor({ name, imgUrl, rating: ratingValue } as Actor).subscribe((actor) => {
      this.location.back();
    });
  }
}
