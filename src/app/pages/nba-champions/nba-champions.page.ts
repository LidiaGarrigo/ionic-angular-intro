import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-champions',
  templateUrl: './nba-champions.page.html',
  styleUrls: ['./nba-champions.page.scss'],
})
export class NbaChampionsPage implements OnInit {

  Championships = [
    {
      year: 2015,
      champion: 'Clevelands Cavaliers',
      champion_url: 'https://imgur.com/kKZtO7g',
      best_players: [
        'Lebron James',
        'Kyrie Irving',
        'Kevin Love',
        'J.R. Smith',
        'Anderson Varejao',
      ],
    },
    {
      year: 2014,
      champion: 'Golden State Warriors',
      champion_url: 'https://imgur.com/709RlKv',
      best_players: [
        'Stephen curry',
        'Klay Thompson',
        'Draymong Green',
        'Andrew Bogut',
        'Gestus Ezeli',
      ],
    },
    {
      year: 2013,
      champion: 'San Antonio Spurs',
      champion_url: 'https://imgur.com/gUy2xsZ',
      best_players: [
        'Tim Duncan',
        'Tony Parker',
        'Manu Ginóbili',
        'Kawhi Leonard',
        'Tiago Splitter',
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
