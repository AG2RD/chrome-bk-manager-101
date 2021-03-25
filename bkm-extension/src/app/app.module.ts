import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { PopupComponent } from './feature/popup/popup.component';
import { MainComponent } from './feature/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
