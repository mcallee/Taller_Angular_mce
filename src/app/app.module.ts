import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SerieModule } from './series/serie.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SerieModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
