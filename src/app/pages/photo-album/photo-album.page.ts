import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.page.html',
  styleUrls: ['./photo-album.page.scss'],
})
export class PhotoAlbumPage implements OnInit {

  photos: any[] = [
    {
      route: '//imgur.com/a/8ORyubW',
      title: 'Torres del Paine, Patagonia',
      id: 1,
    },
    {
      route: '../../../assets/Colorado-river.jpg',
      title: 'Colorado Canyon River',
      id: 2,
    },
    {
      route: '../../../assets/Serengeti-masai.jpg',
      title: 'Serengeti Masai Mara',
      id: 3,
    },
  ];


  constructor() { }

  ngOnInit() {
  }
  

}
