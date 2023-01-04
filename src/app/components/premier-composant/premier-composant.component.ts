import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-premier-composant',
  templateUrl: './premier-composant.component.html',
  styleUrls: ['./premier-composant.component.css']
})
export class PremierComposantComponent {
  etudiant: number = 322;
  dir:any = {prenom:'Adrien' };
  user : User = {id: 1, name: 'Jhon Wick', email: 'jhon.wick@adressebidon.zeuby'};
  // affiche un pop up sur la page web
  

  // ici on fait l'injection de dep du serv routeur
  constructor (private router: Router){}


  goTo(): void{
    this.router.navigate(['form']);
  }

  afficheMessage(message: string): void {
    alert("mon message: " +message);
  }
  afficheMessage2(message: string, event:any): void {
    alert("mon message: " +message);
    event.preventDefault();
    event.stopPropagation();
  }
  quantites: number[] = [12, 189, 17, 12];
  
  
  user1: User = { id: 1, name: 'John', email: 'john@example.com' };
  user2: User = { id: 2, name: 'Jane', email: 'jane@example.com' };
  user3: User = { id: 3, name: 'Bob', email: 'bob@example.com' };
  users: User[] = [this.user1, this.user2, this.user3];
  
  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib2",
      "description":"desc2"
      }
  ]
  },
  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
      "libelle":"lib1",
      "description":"desc1"
      },
      {
      "libelle":"lib2",
      "description":"desc2"
      }
  ]
  }]
  position : number= 2;




}