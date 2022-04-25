import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
//import { throws } from 'assert';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { Note } from './note';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private url2="http://localhost:3000/images";
  private url3="http://localhost:3000/fav";

  private url = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  getNotes(): Observable<Array<Note>> {
    return this.http.get<Note[]>(this.url);
  }

  addNote(n: Note): Observable<Note> {
    return this.http.post<Note>(this.url, n, this.httpOptions);

  }
  getFav(): Observable<Array<Note>> {
    return this.http.get<Note[]>(this.url3);
  }

  addFav(n: Note): Observable<Note> {
    return this.http.post<Note>(this.url3, n, this.httpOptions);

  }
  addImage(s:Image):Observable<Image>
  {
    return this.http.post<Image>(this.url2, s, this.httpOptions);

  }
  getImages(): Observable<Array<Image>>{
    return this.http.get<Image[]>(this.url2);
  }
}
