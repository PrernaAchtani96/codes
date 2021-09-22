import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpsService} from './https.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [HttpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
