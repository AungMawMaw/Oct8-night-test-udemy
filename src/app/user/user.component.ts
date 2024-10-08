import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Data_Users } from '../../data-users';

const random_user = Math.floor(Math.random() * Data_Users.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;

  // @Output() select = new EventEmitter();
  select = output<string>();

  get img_src() {
    return 'assets/users/' + this.avatar;
  }
  onClickUser() {
    this.select.emit(this.id); //send data to parents
  }
  // random=0
  // randomUser(){
  //   this.random= Math.floor(Math.random()*Data_Users.length)
  // }
  // randomUser()

  // selected_user = Data_Users[random_user];
  //
  // get img_src() {
  //   return 'assets/users/' + this.selected_user.avatar;
  // }
  //
  // onClickUser() {
  //   console.log('hello ' + this.selected_user.name);
  //   const random_user = Math.floor(Math.random() * Data_Users.length);
  //   this.selected_user = Data_Users[random_user];
  // }
}
