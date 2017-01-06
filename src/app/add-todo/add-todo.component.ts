import { Component, Output, EventEmitter} from '@angular/core';
import { Todo } from '../todo/todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() newTodo = new EventEmitter();
  isInputVisible = false;
  showInput ($input) {
    this.isInputVisible = true;
    $input.focus(); // does not work :(
  }
  addTodo(newTodoText: string) {
    this.newTodo.emit(new Todo(newTodoText));
  }
}
