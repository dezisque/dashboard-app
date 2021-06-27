import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { TodoList } from '../../../../shared/models/todos/todo-list';

interface ConfirmModel {
  todoItem: TodoList;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent
  extends SimpleModalComponent<ConfirmModel, boolean>
  implements OnInit, ConfirmModel
{
  public todoItem: any;
  constructor() {
    super();
  }

  ngOnInit(): void {}

  public addNewTodo(): void {
    this.todoItem.items.push({});
  }

  public save(): void {}
}
