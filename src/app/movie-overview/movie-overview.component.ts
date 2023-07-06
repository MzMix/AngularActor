import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/interfaces/movieDetails.interface';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css'],
})
export class MovieOverviewComponent {
  @Input() movieDetails!: MovieDetails;
}