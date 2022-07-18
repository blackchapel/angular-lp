import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { ITask } from 'src/app/ITask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS; 

  constructor() { }

  ngOnInit(): void {
  }

}
