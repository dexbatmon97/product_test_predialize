import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule(
{
  imports:[
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ]

}
)
export class MaterialModule{}