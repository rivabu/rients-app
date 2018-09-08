import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';
import {TodoDataService} from "./todo-data.service";
import {ApiService} from "./api.service";
import {AppRoutingModule} from "./app-routing.module";
import {TodosComponent} from './todos/todos.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {SessionService} from "./session.service";
import {AuthService} from "./auth.service";
import {SignInComponent} from './sign-in/sign-in.component';
import {MyErrorDirective} from './my-error.directive';
import {MyIfDirective} from './my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent,
    SignInComponent,
    MyErrorDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [TodoDataService, ApiService, SessionService, AuthService], // global provider
  bootstrap: [AppComponent], // kunnen dus meerdere zijn
  exports: [MyErrorDirective, MyIfDirective]
})
export class AppModule {
}
