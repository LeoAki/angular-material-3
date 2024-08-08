import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { TipografiaComponent } from './tipografia/tipografia.component';
import { MiFormularioComponent } from './Schematic/mi-formulario/mi-formulario.component';
import { NavegadorComponent } from './Schematic/navegador/navegador.component';
import { DashboardComponent } from './Schematic/dashboard/dashboard.component';
import { CtableComponent } from './Schematic/ctable/ctable.component';
import { CarbolComponent } from './Schematic/carbol/carbol.component';
import { DragDopComponent } from './Schematic/drag-dop/drag-dop.component';
import { ButtonComponent } from './Componentes-angular/button/button.component';
import { DatePickerComponent } from './Componentes-angular/date-picker/date-picker.component';
import { CheckboxComponent } from './Componentes-angular/checkbox/checkbox.component';
import { DialogBaseComponent } from './Componentes-angular/dialog/dialog-base/dialog-base.component';
import { InputComponent } from './Componentes-angular/input/input.component';
import { SelectComponent } from './Componentes-angular/select/select.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatSlideToggleModule,
    TipografiaComponent,
    MiFormularioComponent,
    NavegadorComponent,
    DashboardComponent,
    CtableComponent,
    CarbolComponent,
    DragDopComponent,

    MatDivider,
    ButtonComponent,
    DatePickerComponent,
    CheckboxComponent,
    DialogBaseComponent,
    InputComponent,
    SelectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-material-v3';
}
