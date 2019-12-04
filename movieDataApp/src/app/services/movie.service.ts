import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // This is a free api key I obtained on the website
  private url = 'http://www.omdbapi.com/';
  private apiKey = '3bab184c';

  constructor(private http: HttpClient) { }

  /**
   * Get data from the specified api
   * map the result to return only the results that we need
   * @param {string} title name of the movie
   * @returns Observable with the search results
   */

  searchData(title: string): Observable<any> {
    console.log(`${this.url}?s=${encodeURI(title)}&type=&apikey=${this.apiKey}`);
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=&apikey=${this.apiKey}`).pipe(
      map(results => results['Search']));
    
  }

  /**
   * Get the detailed information for an ID
   * @param {string} id imdbID
   * @returns Observable with detailed information of the movie
   */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
