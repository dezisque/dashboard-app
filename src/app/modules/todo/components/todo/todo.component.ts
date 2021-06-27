import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { LoaderService } from '../../../../shared/services/loader/loader.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoList } from '../../../../shared/models/todos/todo-list';
import { TodoItem } from '../../../../shared/models/todos/todo-item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public items: Observable<TodoList[]>;

  private itemsCollection: AngularFirestoreCollection<TodoList>;

  constructor(
    private readonly afs: AngularFirestore,
    private loaderService: LoaderService,
    private simpleModalService: SimpleModalService,
  ) {
    this.loaderService.setLoader();
    this.itemsCollection = afs.collection<TodoList>('todos');
    this.items = this.itemsCollection.valueChanges({ idField: 'todoId' });
    this.items.subscribe(() => {
      this.loaderService.unsetLoader();
    });
  }
  ngOnInit(): void {}

  public openDetailView(todoItem: TodoList): void {
    this.simpleModalService.addModal(
      TodoItemComponent,
      { todoItem },
      {
        closeOnClickOutside: true,
      },
    );
  }
}
