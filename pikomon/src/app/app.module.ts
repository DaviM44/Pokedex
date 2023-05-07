import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Importar o http acima!
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PokeComponent } from './poke/poke.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }