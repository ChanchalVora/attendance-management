import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave.component.html'
})
export class LeaveComponent {
  leaves = ['chanchal - Sick Leave', 'sanjay- Casual Leave'];
}
