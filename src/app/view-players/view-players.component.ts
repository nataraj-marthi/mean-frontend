import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Player } from '../player';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.scss']
})
export class ViewPlayersComponent implements OnInit {
   players: Player[] = [];
  constructor(private service: CricketService) { }

  ngOnInit() {
    console.log('hello');
    this.getPlayers();
  }



  getPlayers () {
    this.service.getPlayers().subscribe((res: any)=> {
      //this.players = res.data;
      
      this.players = res._embedded.players;
      console.log(this.players);
         }, err => {
      console.log(err);
    })
  }

}
