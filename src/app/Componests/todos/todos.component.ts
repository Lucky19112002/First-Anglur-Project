import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem!: string;
  todos:Todo[];
  constructor() {
    this.todos =[];
    this.localItem = localStorage.getItem("todos") ?? "";
    if (this.localItem === null) {
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    console.log(index);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(newTodo: Todo) {
    console.log(newTodo);
    this.todos.push(newTodo);  
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(event :any) {
    const index = this.todos.indexOf(event);
    this.todos[index].active = !this.todos[index].active ;
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(this.todos )
  }
}
