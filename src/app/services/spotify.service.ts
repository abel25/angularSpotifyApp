import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  //este metodo se hace para no repetir codigo con las query y url
  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD4WTcMb9-Hy3_AER1mpru-dzwzZ2kt3gZXZpKPU7izmv9EKocJw8BcNx0ONEd1N-vpRHiq1bUKs5NWqVw'
    });

    return this.http.get(url, { 'headers': headers });
  }

  getNewReleases(){
    // FORMA 1 return this.http.get('https://api.spotify.com/v1/browse/new-releases', { 'headers': this.headers });
    
    //FORMA 2
    return this.getQuery('browse/new-releases')
    .pipe(map( data => {
      return data['albums'].items;
    }));
  }

  getArtists(value: string){
   // FORMA1 return this.http.get(`https://api.spotify.com/v1/search?q=${value}&type=artist&limit=15`, { 'headers': this.headers });
   // FORMA2 return this.http.get(`https://api.spotify.com/v1/search?q=${value}&type=artist&limit=15`, { 'headers': this.headers })
   //.pipe(map( data => {
   //return data['artists'].items;
   //}));

   //FORMA3
   return this.getQuery(`search?q=${value}&type=artist&limit=15`)
   .pipe(map( data => {
      return data['artists'].items;
   }));
  }

  getArtist(id: string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map( data =>{
        return data['tracks'];
      }));
  }
}
