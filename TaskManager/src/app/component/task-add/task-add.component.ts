import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task.service';
import { Title } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrService, provideToastr } from 'ngx-toastr';
@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent implements OnInit{
  taskForm:FormGroup;
  constructor(private fb: FormBuilder,private taskService:TaskService,private router:Router,){
 this.taskForm =this.fb.group({
  title:['',[Validators.required]],
  description:[''],
  dueDate:[''],
  priority:[''],
 }); 
  }
  ngOnInit(): void {
 
  }
  onSubmit(){
    let task = this.taskForm.value;
    this.taskService.createTasks(task).subscribe(data =>{
    
      this.router.navigate(['/'])
    });

  }
  onCancel(){
    this.router.navigate(['/'])
  };
  }
// let task =this.taskForm.value

