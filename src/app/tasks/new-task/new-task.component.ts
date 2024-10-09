import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTask>();
  @Input({ required: true }) id!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService = inject(TasksService);

  onCancel() {
    this.cancel.emit();
  }
  onSubmit() {
    this.taskService.addUserTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.id,
    );
    this.cancel.emit();
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDate,
    // });
  }
}
