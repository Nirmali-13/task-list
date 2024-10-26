import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from './task.service';
import { NgModel } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgFor,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'TaskManager';
  // tasks:any[] = [];
  // constructor(private taskService :TaskService){}
  // ngOnInit():void{
  //   this.taskService.getTasks().subscribe(data => {
  //     this.tasks = data;
  //   })
  // }
}
