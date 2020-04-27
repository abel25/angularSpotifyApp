import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verArtista(song: any){
    let artistId;
    if (song.type === 'artist'){
      artistId = song.id;
    } else{
      artistId = song.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }
}
