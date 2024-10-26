import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  getTasks(){
    return this.http.get<Task[]>('http://localhost:5196/api/TaskItems');
  }

  createTasks(task:any){
    return  this.http.post<any[]>('http://localhost:5196/api/TaskItems',task);
  }
  deleteTasks(taskId :number){
    return this.http.delete<Task>('http://localhost:5196/api/TaskItems/'+taskId);
  }
  updateTasks(task : Task){
    return this.http.put('http://localhost:5196/api/TaskItems' + task.id,task)
  }
  getTaskById(taskId : number){
    return this.http.get<Task>('http://localhost:5196/api/TaskItems/'  + taskId)
  }
}
export interface Task{
  id:number;
  title:string;
  description:string;
  dueDate:Date;
  priority:string;
}