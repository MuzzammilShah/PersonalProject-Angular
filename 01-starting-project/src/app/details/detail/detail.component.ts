import { Component, Input } from '@angular/core';


interface Task {
  id:string,
  projectId:string,
  title:string,
  summary:string,
  completed:boolean
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input({ required:true }) task!: Task;

  toggleCompletion() {
    this.task.completed = !this.task.completed;
  }
}
