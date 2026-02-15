import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../task-form/models/task-item.model';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.css',
})
export class TaskListItem {
  taskItem = input.required<TaskItem>(); //for parent
  statusValues = ['Todo', 'In Progress', 'Completed']
  taskService = inject(TaskService);

  action = computed(() => {
    const taskValueItem = this.taskItem();

    return this.statusValues.filter(x => taskValueItem.status !== x);
  }) 

  markAs(text: string, updatedStatus: string) {
    this.taskService.markAsStatus(text, updatedStatus);
  }

}
 