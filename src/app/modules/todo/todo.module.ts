import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [TodoComponent, TodoItemComponent],
  imports: [CommonModule, TodoRoutingModule, SimpleModalModule],
})
export class TodoModule {}
