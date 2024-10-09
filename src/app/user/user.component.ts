import { Component, Input, output } from '@angular/core';
import { Data_Users } from '../../data-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const random_user = Math.floor(Math.random() * Data_Users.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // @Output() select = new EventEmitter();
  select = output<string>();

  get img_src() {
    return 'assets/users/' + this.user.avatar;
  }
  onClickUser() {
    this.select.emit(this.user.id); //send data to parents
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
