import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Input() isRoot: boolean;
  @Output() doneChanged = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();

  constructor() { }

  deleteMe() {
    this.deleteTodo.emit(this.todo.id);
  }
  checkedChange(checked: boolean) {
    this.todo.done = checked ? 1 : 0;
    this.doneChanged.emit();
  }
  onAddTodo(newTodo: Todo) {
    this.todo.items.push(newTodo);
    this.updateDone();
  }
  onDeleteTodo(id: number) {
    let items = this.todo.items;
    items.splice(items.findIndex(item => item.id === id), 1);
    this.updateDone();
  }
  updateDone() {
    this.todo.done = 0;
    this.todo.items.forEach(item => {
      this.todo.done += item.done / this.todo.items.length;
    });
    this.doneChanged.emit();
  }
}
