import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule(
{
  imports:[
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatBadgeModule
  ]

}
)
export class MaterialModule{}