import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { AddUniversiteComponent } from './components/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './components/update-universite/update-universite.component';
import { UniversiteDetailsComponent } from './components/universite-details/universite-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'universite-list', component: UniversiteListComponent },
  { path: 'add-universite', component: AddUniversiteComponent },
  { path: 'update-universite/:id', component: UpdateUniversiteComponent },
  { path: 'universite-details/:id', component: UniversiteDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
