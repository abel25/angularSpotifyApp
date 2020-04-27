import { Component, OnInit, Output } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  @Output() artistData: any[] = [];
  artists: any[] = [];
  loading = true;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(value: string){
    this.spotify.getArtists(value)
    .subscribe( (data: any) => {
      this.artists = data;
      this.artistData = this.artists;
      this.loading = false;
    });
  }

}
