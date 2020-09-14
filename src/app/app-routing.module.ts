import { AwesomeEditComponent } from './awesomes/awesome-edit/awesome-edit.component';
import { AwesomeListComponent } from './awesomes/awesome-list/awesome-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'awesomes' , pathMatch: 'full'},
  {path: 'awesomes', component: AwesomeListComponent},
  {path: 'awesomes/edit/:id', component: AwesomeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
