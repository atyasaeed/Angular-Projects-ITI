import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { TasksComponent } from './tasks/tasks.component';
import { MaxLengthPipe } from './max-length.pipe';
import { TaskService } from './tasks/task.service';

@NgModule({
  declarations: [
    AppComponent,StudentComponent, ProjectComponent, EmployeeComponent, TasksComponent, MaxLengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
