import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Actor } from 'src/interfaces/actor.interface';
import { ActorService } from '../services/actor.service';
import { MovieDetails } from 'src/interfaces/movieDetails.interface';
import { KnownForService } from '../services/movie-details.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
})
export class ActorDetailsComponent implements OnInit {
  @Input() actor?: Actor;

  knownFor?: MovieDetails[] | void;

  constructor(
    private actorService: ActorService,
    private knownForService: KnownForService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.actorService
      .getActorById(id)
      .subscribe((actor) => (this.actor = actor));
  }

  async showKnownFor() {
    this.knownFor = await this.knownForService.search(`${this.actor?.name}`);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.actor) return;

    this.actorService.updateActor(this.actor).subscribe(() => this.goBack());
  }
}
