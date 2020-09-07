import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';

// main navigational map inside home
// configuring routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
