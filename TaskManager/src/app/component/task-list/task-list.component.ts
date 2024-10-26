import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FilterPipe } from '../../filter.pipe';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FilterPipe,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  title = 'TaskManager';
  tasks: any[] = [];
  constructor(private taskService: TaskService, private router: Router) {

  }
  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }
  onEdit(taskId: number) {
    this.router.navigate(['edit', taskId])
  }
  onDelete(taskId: number) {
    this.taskService.deleteTasks(taskId).subscribe(data => {
      alert("Task is deleted")
      this.loadTasks();

    })
  }
}
