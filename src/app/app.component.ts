import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodosbyid(1);
  }

  getTodosbyid(id) {
    this.todoService.getTodoById(id).subscribe((data) => {
      console.log(data);
      return data;
    })
  }
}