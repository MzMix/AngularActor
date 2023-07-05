import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Actor } from 'src/interfaces/actor.interface';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private baseUrl = 'api/actors';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string): void {
    this.messageService.add(`ActorService: ${message}.`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getAllActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.baseUrl).pipe(
      tap((_) => this.log('fetched actors')),
      catchError(this.handleError<Actor[]>('getActors', []))
    );
  }

  getActorById(id: Number): Observable<Actor> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<Actor>(url).pipe(
      tap((_) => this.log(`fetched actor id=${id}`)),
      catchError(this.handleError<Actor>(`getActor id=${id}`))
    );
  }

  updateActor(actor: Actor): Observable<any> {
    return this.http.put(this.baseUrl, actor, this.httpOptions).pipe(
      tap((_) => this.log(`updated actor id=${actor.id}`)),
      catchError(this.handleError<any>('updateActor'))
    );
  }

  addActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.baseUrl, actor, this.httpOptions).pipe(
      tap((newActor: Actor) =>
        this.log(`added new actor w/ id=${newActor.id}`)
      ),
      catchError(this.handleError<Actor>('addActor'))
    );
  }

  deleteActor(id: Number): Observable<Actor> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Actor>(url, this.httpOptions).pipe(
      tap((_) => this.log(`delted actor id=${id}`)),
      catchError(this.handleError<Actor>('deleteActor'))
    );
  }

  searchActors(term: string): Observable<Actor[]> {
    if (!term.trim()) return of([]);

    return this.http.get<Actor[]>(`${this.baseUrl}/?firstName=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found actors matching "${term}"`)
          : this.log(`no actors matching "${term}"`)
      ),
      catchError(this.handleError<Actor[]>('searchActors', []))
    );
  }

}
