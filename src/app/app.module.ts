import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({

  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, SharedModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [],
  bootstrap: [AppComponent], // kunnen dus meerdere zijn
})
export class AppModule {
}
