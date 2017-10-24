import { NgModule, NgModuleFactoryLoader, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MoviesModule } from './movies/movies.module';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    HttpModule,
    FormsModule,
    SharedModule,
    MoviesModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
