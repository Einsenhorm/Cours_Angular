import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
//service qui permet de recupere le parame ds la route appele
  constructor(private route: ActivatedRoute) {}

// methode du cycle de vie d'un component
// methode appelle a l'init du composant
 ngOnInit() {
  //methode synchron
  const id = this.route.snapshot.params["userId"];
  console.log(id);
 }

}
