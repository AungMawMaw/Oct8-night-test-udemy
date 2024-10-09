import { Injectable } from '@angular/core';
import { NewTask, Task } from './task/task.model';
import { Data_Tasks } from '../../data-tasks';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private Data_Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const Data_Taskss = localStorage.getItem('Data_Tasks');
    if (Data_Taskss) {
      this.Data_Tasks = JSON.parse(Data_Taskss);
    }
  }
  getUserTask(userid: string) {
    return this.Data_Tasks.filter((task) => task.userId === userid);
  }

  addUserTask(newTask: NewTask, userId: string) {
    let tmpTask: Task = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    };
    // this.Data_Tasks.push(tmpTask);
    this.Data_Tasks.unshift(tmpTask);

    this.saveData_Tasks();
  }

  deleteUserTask(id: string) {
    this.Data_Tasks = this.Data_Tasks.filter((task) => task.id !== id);

    this.saveData_Tasks();
  }
  private saveData_Tasks() {
    localStorage.setItem('Data_Tasks', JSON.stringify(Data_Tasks));
  }
}
