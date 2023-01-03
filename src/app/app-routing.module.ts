import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';


// declaration des routes pour afficher le contenu des pages
const routes: Routes = [
  {path: "", component: PremierComposantComponent},
  {path: "form", component: FormulaireComponent},
  {path: "404", component: NotFoundComponent},
  //tjr placer en dernier sinon les routes ne seront pas prises en compte
  {path: "**", redirectTo: '/404'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
