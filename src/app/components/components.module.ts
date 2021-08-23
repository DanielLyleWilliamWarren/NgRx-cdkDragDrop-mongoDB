import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { BrowserModule } from '@angular/platform-browser';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './tables/tables.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { unSeatedEmployeeReducer } from '../store/reducers/unSeated.reducer';
import { seatedEmployeeReducer } from '../store/reducers/seated.reducer';



@NgModule({
  declarations: [
    TablesComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialListComponent,
  ],
  imports: [
    StoreModule.forRoot({
      unSeated: unSeatedEmployeeReducer,
      seated: seatedEmployeeReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    CommonModule,
    BrowserModule,
    DragDropModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MatInputModule,
  ],
})
export class ComponentsModule { }
