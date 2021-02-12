import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { cards } from '../data/cards.data.js';
import { Card } from '../model/card.js';

@Injectable({
  providedIn: 'root'
})
export class DoingService {

  url = 'http://localhost:8080/card/';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDoing(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.url + "/doing")
      .pipe(catchError(this.handleError));
  }

  deleteDoing(card: Card) {
    return this.httpClient.delete(this.url + card.id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
