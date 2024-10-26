import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TaskService } from '../../task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  taskId : number;
  taskForm:FormGroup;
  constructor(private route :ActivatedRoute,private fb: FormBuilder,private taskService:TaskService,private toastr:ToastrService, private router:Router,){
    const tid =this.route.snapshot.paramMap.get("id");
    // console.log(tid)
    this.taskId = Number(tid);
 this.taskForm =this.fb.group({
  id:[''],
  title:['',[Validators.required]],
  description:[''],
  dueDate:[''],
  priority:[''],
 }); 
  }
ngOnInit(): void {
  this.taskService.getTaskById(this.taskId).subscribe(data => {
   let dueDate = new Date(data.dueDate).toISOString().slice(0,10);
   this.taskForm.patchValue(
    {
      id : data.id,
    title : data.title,
    description : data.description,
    dueDate : data.dueDate,
    priority : data.priority
    }
   );
  },error =>{
    this.toastr.error("Task is not found");
  }
);
}

onSubmit(){
  // let task = this.taskService.getTaskById()
  // this.taskService.updateTasks(task).subscribe(data =>{
  //   this.router.navigate(['/'])
  // });
  let task = this.taskForm.value;
  this.taskService.updateTasks(task).subscribe(data => {
    this.toastr.success("Task is updated successfully");
    // console.log(data);
    this.router.navigate(['/'])
  });

}
cancel() {
  throw new Error('Method not implemented.');
}


}
