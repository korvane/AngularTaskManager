import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { TaskService } from './services/task';
import { TaskListItem } from './components/task-list-item/task-list-item';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList, TaskListItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularTaskManager');
  taskService = inject(TaskService);
  private tasks = this.taskService.tasks;
  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'Todo');
  })
  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'InProgress');
  })
  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter(x => x.status === 'Completed');
  })
}
