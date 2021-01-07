import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.page.html',
  styleUrls: ['./photo-album.page.scss'],
})
export class PhotoAlbumPage implements OnInit {

  photos: any[] = [
    {
      route: 'https://imgur.com/L3HxJos',
      title: 'Torres del Paine, Patagonia',
      id: 1,
    },
    {
      route: 'https://imgur.com/X4INMdE',
      title: 'Colorado Canyon River',
      id: 2,
    },
    {
      route: 'https://imgur.com/V8rO6jf',
      title: 'Serengeti Masai Mara',
      id: 3,
    },
  ];


  constructor() { }

  ngOnInit() {
  }
  

}
