import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../../../employee.model';

@Component({
  selector: 'app-employee-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './employee-form-dialog.component.html',
  styleUrls: ['./employee-form-dialog.component.css']
})
export class EmployeeFormDialogComponent {
  isEdit: boolean = false;
  departments = ['IT', 'HR', 'Finance', 'Sales', 'Operations'];
  roles = ['Employee', 'HR'];

  constructor(
    public dialogRef: MatDialogRef<EmployeeFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isEdit: boolean; employee?: Employee }
  ) {
    this.isEdit = this.data.isEdit;
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
