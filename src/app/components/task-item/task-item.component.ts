import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/ITask';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
