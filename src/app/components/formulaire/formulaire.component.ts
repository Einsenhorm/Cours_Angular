import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  log: string = "";
  pwd: string = "";
  constructor() { }
  register() {
  console.log(this.log, this.pwd);
  }
}
