import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { Data_Users } from '../data-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = Data_Users;
  title = 'test-Oct8-1';
  selectedUserId = this.users[0].id;

  onSelectUser(id: string) {
    // console.log('Select user with id ' + id);
    this.selectedUserId = id;
  }

  get selectedUser() {
    // return this.users.find((user) => user.id === this.selectedUserId)!;
    return this.users.find((user) => user.id === this.selectedUserId);
  }
}
