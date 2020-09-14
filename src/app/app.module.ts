import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeListComponent } from './awesomes/awesome-list/awesome-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AwesomeEditComponent } from './awesomes/awesome-edit/awesome-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeListComponent,
    AwesomeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
