import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {


  private url = 'http://52.57.88.137/api/card_data/';

  constructor( private http: Http ) { }

getAll(name: string) {
  return this.http.get(this.url + name).pipe(
    map (response => response.json()),
    catchError( error => throwError(error))
  );
}

}
