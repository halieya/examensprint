import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { AvionGuard } from './avion.guard';
import { AvionsComponent } from './avions/avions.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeVolsComponent } from './liste-vols/liste-vols.component';
import { LoginComponent } from './login/login.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParVolComponent } from './recherche-par-vol/recherche-par-vol.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
const routes: Routes = [ 
  {path: "avions", component : AvionsComponent},
  {path: "add-avion", component : AddAvionComponent,canActivate:[AvionGuard]},
  {path: "updateAvion/:id", component: UpdateAvionComponent},
  {path: "rechercheParVol", component : RechercheParVolComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeVols", component : ListeVolsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
 {path: "", redirectTo: "avions", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
