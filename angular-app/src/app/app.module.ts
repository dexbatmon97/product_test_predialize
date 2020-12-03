import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from './module.material';
import { DetailsComponent } from './details/details.component';
import { OrderFormComponent } from './order-form/order-form.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
