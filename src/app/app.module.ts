import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import { MarkdownModule} from 'ngx-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({

    imports: [
        BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, SharedModule, MarkdownModule.forRoot()
    ],
    declarations: [
        AppComponent
    ],
    exports: [],
    bootstrap: [AppComponent], // kunnen dus meerdere zijn
})
export class AppModule {
}
