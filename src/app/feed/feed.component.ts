import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Music } from '../models/music.model';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  musics: Music[] = [];
  constructor(
    private musicService: MusicService
  ) { }

  ngOnInit(): void {
    this.musicService.getMusics().subscribe(
      (data) => this.musics = data
    )
  }
}
