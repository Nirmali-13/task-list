import { Routes } from '@angular/router';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskAddComponent } from './component/task-add/task-add.component';
import { TaskEditComponent } from './component/task-edit/task-edit.component';
import { UserAddComponent } from './component/user-add/user-add.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserListComponent } from './component/user-list/user-list.component';

export const routes: Routes = [
    {path:'tasks', component:TaskListComponent},
    {path:'add', component:TaskAddComponent},
    {path:'edit/:id', component:TaskEditComponent},
    {path:'user', component:UserListComponent},
    {path:'user-add', component:UserAddComponent},
    {path:'user-edit', component:UserEditComponent},
   
];
