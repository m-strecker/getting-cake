import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import { TasksServiceService } from '../tasks-service.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private service: TasksServiceService){}

  ngOnInit() {
    this.service.getTasks().subscribe((result: any) => {  //had to alter "result: {tasks: Task[]} to "result: any" to avoid a type mismatch error with response object
      this.tasks = result.tasks;
    });
  }
}
