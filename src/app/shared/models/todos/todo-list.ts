import { TodoItem } from './todo-item';

export interface TodoList {
  todoId?: string;
  completed: boolean;
  title: string;
  items: TodoItem;
}
