import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ToDoTaskReducer } from '../store/reducers/toDo.reducer';
import { DoneTaskReducer } from '../store/reducers/done.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TablesComponent } from '../tables/tables.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    TablesComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
  ],
  imports: [
    FormsModule,
    StoreModule.forRoot({
      toDo: ToDoTaskReducer,
      done: DoneTaskReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    CommonModule,
    BrowserModule,
    DragDropModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
})
export class ComponentsModule { }
