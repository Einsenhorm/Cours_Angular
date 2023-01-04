import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PremierComposantComponent } from './components/premier-composant/premier-composant.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';


// declaration des routes pour afficher le contenu des pages
const routes: Routes = [
  {path: "", component: PremierComposantComponent},
  {path: "form", component: FormulaireComponent},
  {path: "404", component: NotFoundComponent},
  {path: "users", component: UsersComponent},
  {path: "users/:userId", component: UserComponent},
  //tjr placer en dernier sinon les routes ne seront pas prises en compte
  {path: "**", redirectTo: '/404'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
