import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from 'src/interfaces/movieDetails.interface';
import { MessageService } from './message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KnownForService {
  private baseUrl =
    'https://api.themoviedb.org/3/search/person?query=Keanu%20Reeves&include_adult=false&language=pl-Pl&page=1';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  async search(term: string) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: environment.apiURL,
      },
    };

    let result: MovieDetails[] = [];

    const response = fetch(
      `https://api.themoviedb.org/3/search/person?query=${encodeURI(
        term
      )}&include_adult=false&language=pl-Pl&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        for (const el of data.results[0].known_for) {
          result.push({
            title: el.title,
            overview: el.overview,
            release_date: el.release_date,
          });
        }
      })
      .then((_) => {
        this.messageService.add(
          `MovieDetailsService: fetched movie data for actor: ${term}`
        );
        return result;
      })
      .catch((err) =>
        this.messageService.add(`MovieDetailsService error: ${err}`)
      );

    return await response;
  }
}
