import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'home', component: TablesComponent },
  { path: 'employees', component: TutorialListComponent },
  { path: 'employees/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
