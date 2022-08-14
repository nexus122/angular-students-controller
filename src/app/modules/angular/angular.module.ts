import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Botones
import { MatButtonModule } from '@angular/material/button';
// Iconos
import { MatIconModule } from '@angular/material/icon';
// Cards
import { MatCardModule } from '@angular/material/card';
// Inputs
import { MatInputModule } from '@angular/material/input';
// Toolbar
import { MatToolbarModule } from '@angular/material/toolbar';
// SnackBar
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Barra de progreso
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressBarModule,
  ],
})
export class AngularModule {}
