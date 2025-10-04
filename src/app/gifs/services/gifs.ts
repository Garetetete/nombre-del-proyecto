import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class Gifs {
  private http = inject(HttpClient)
  trandingGifs = signal<Gif[]>([])

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get(`${environment.urlBase}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 40
      }
    }).subscribe((response) => {
      //console.log(response);
      
    });
  }
}