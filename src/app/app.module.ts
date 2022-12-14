import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';

import { HttpClientModule } from '@angular/common/http';
import { RechercheParVolComponent } from './recherche-par-vol/recherche-par-vol.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeVolsComponent } from './liste-vols/liste-vols.component';

import { LoginComponent } from './login/login.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
       AvionsComponent,
          AddAvionComponent,
        
          RechercheParVolComponent,
          RechercheParNomComponent,
          SearchFilterPipe,
          ListeVolsComponent,
         
          LoginComponent,
          UpdateVolComponent,
          UpdateAvionComponent,
          ForbiddenComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
