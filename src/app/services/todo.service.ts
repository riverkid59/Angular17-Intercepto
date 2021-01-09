import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = `https://jsonplaceholder.typicode.com/todos/`

  constructor(private todoClient: HttpClient) { }

  getTodoById(id: number): Observable<any> {
    const idTodo: string = this.todoUrl + id;
    return this.todoClient.get(idTodo);
  }
}