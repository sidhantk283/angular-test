import { Component } from '@angular/core';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todoList: string[] = [];
  todovalue = '';
  getValue(inputValue: string) {
    this.todovalue = inputValue;
  }
  addTodo() {
    this.todoList.push(this.todovalue);
    this.todovalue = '';
  }
}
