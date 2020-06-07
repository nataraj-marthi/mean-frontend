import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

//private baseUrl = "http://localhost:3030/cricket/api";  
// private baseUrl = "http://localhost:8090/cricket/api"; 
//private baseUrl = "http://40.115.108.20/cricket/api";
private baseUrl ="https://angular-spring-cricket-app.azurewebsites.net"
//private baseUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }
  
  getPlayers () {
    
    return this.http.get(`${this.baseUrl}/players`);
  }

  updatePlayer(player: Player) {
    return this.http.patch(`${this.baseUrl}/players/${player.id}`, player);
  }

  deletePlayer(id) {
    return this.http.delete(`${this.baseUrl}/players/${id}`);
  }










  

  createPlayer(player: Player) {
    return this.http.post(`${this.baseUrl}/players`, player);
  }
}
