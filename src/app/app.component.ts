import { Component } from '@angular/core';
import { Todo } from './todo'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  
  todoVal: string;
  todoList:Todo[];

  ngOnInit(){
    this.todoVal=""
    this.todoList=[]
  }

  addTodo(){
    if(this.todoVal!==""){
      const newTodo:Todo={
        id: Date.now(),
        value:this.todoVal,
        isDone:false
      }
      this.todoList.push(newTodo);
      this.todoVal="";
    }
   
  }

  deleteTodo(id:number){
    this.todoList=this.todoList.filter(item=>item.id !== id)
  }
}
