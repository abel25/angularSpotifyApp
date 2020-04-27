import { Component, OnInit, Output } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  @Output() songs: any[] = [];
  songList: any[] = [];
  loading: boolean = true;

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases()
    .subscribe( (data: any) => {
      this.songList = data;
      this.songs = this.songList;
      this.loading = false;
    });
   }

  ngOnInit(): void {
  }

}
