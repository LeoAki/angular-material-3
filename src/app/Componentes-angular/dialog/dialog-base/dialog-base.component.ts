import { ChangeDetectionStrategy, Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog-base',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-base.component.html',
  styleUrl: './dialog-base.component.css'
})
export class DialogBaseComponent {
  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: {name: this.name(), animal: this.animal()},
      height: '400px', width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
