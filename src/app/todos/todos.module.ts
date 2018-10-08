import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosComponent} from './todos/todos.component';
import {TodoListFooterComponent} from './todo-list-footer/todo-list-footer.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListHeaderComponent} from './todo-list-header/todo-list-header.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {TodosRoutingModule} from './todos-routing.module';
import {TodoDetailComponent} from './todo-detail/todo-detail.component';
import {TodoMainPageComponent} from './todo-main-page/todo-main-page.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, SharedModule, TodosRoutingModule
  ],
  declarations: [TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoMainPageComponent],
  exports: []
})
export class TodosModule {
}
