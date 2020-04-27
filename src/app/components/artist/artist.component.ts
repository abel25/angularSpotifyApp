import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent{

  selectedArtist: any = {};
  loading = true;
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.router.params.subscribe( params => {
      this.getArtistatById(params['id']);
      this.getTopTrackById(params['id']);
    });
   }

   getArtistatById(id: string){
    this.spotify.getArtist(id).subscribe( (artista: any) => {
      this.selectedArtist = artista;
      this.loading = false;
    });
   }

   getTopTrackById(id: string){
    this.spotify.getTopTracks(id).subscribe( (tracks: any) => {
      this.topTracks = tracks;
      console.log("TOP TRACKS " + this.topTracks);
    });
   }
}
