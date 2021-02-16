import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Card } from '../model/card.js';

@Injectable({
  providedIn: 'root'
})
export class DoneService {

  url = 'https://kanban-app-backend.herokuapp.com/card';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getDones(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.url+"/done")
      .pipe(catchError(this.handleError))
  }

  deleteDone(card: Card) {
    return this.httpClient.delete<Card[]>(this.url +"/"+ card.id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateCard(card: Card): Observable<Card> {    
    return this.httpClient.put<Card>(this.url + "/" + card.id, JSON.stringify(card), this.httpOptions)
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
