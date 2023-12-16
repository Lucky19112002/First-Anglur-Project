import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo!: Todo; 
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    // console.log('ocClick has beeen triggred.')

  }
}
