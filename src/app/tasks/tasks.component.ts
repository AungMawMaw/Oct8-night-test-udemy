import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { NewTask, Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) id: string | undefined;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name?: string;
  @Input({ required: true }) avatar?: string;

  isAddingTask = false;

  // private tasksService = new TasksService();
  constructor(private tasksService: TasksService) {} // for use one instant for all components // must injectable true

  get selectUserTask() {
    // return this.tasks.filter((task) => task.userId === this.id);
    return this.tasksService.getUserTask(this.id);
  }
  // onCompletetask(id: string) {
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   this.tasksService.deleteUserTask(id);
  // }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancleAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(newTask: NewTask) {
    // let tmpTask: Task = {
    //   id: new Date().getTime().toString(),
    //   userId: this.id,
    //   title: newTask.title,
    //   summary: newTask.summary,
    //   dueDate: newTask.dueDate,
    // };
    // this.tasks.push(tmpTask);
    this.tasksService.addUserTask(newTask, this.id);
    this.isAddingTask = false;
  }
}
