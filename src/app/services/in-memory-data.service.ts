import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MockData } from 'src/mockData';
import { Actor } from 'src/interfaces/actor.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { actors: MockData };
  }

  genId(actors: Actor[]): number {
    return actors.length > 0
      ? Math.max(...actors.map((actor) => actor.id)) + 1
      : 1;
  }
}
