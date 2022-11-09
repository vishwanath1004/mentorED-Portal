import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { SessioncardComponent } from './components/sessioncard/sessioncard.component';
import {MatIconModule} from '@angular/material/icon'
import { DynamicFormComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormComponent,
    SessioncardComponent

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    SessioncardComponent,
    DynamicFormComponent
  ]
})
export class SharedModule { }
