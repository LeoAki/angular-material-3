import { Routes } from '@angular/router';
import { MiFormularioComponent } from './Schematic/mi-formulario/mi-formulario.component';
import { ButtonComponent } from './Componentes-angular/button/button.component';
import { CheckboxComponent } from './Componentes-angular/checkbox/checkbox.component';
import { DatePickerComponent } from './Componentes-angular/date-picker/date-picker.component';
import { DialogBaseComponent } from './Componentes-angular/dialog/dialog-base/dialog-base.component';
import { SelectComponent } from './Componentes-angular/select/select.component';
import { InputComponent } from './Componentes-angular/input/input.component';
import { BasicButtonComponent } from './styling/basic-button/basic-button.component';
import { StrokedButtonComponent } from './styling/stroked-button/stroked-button.component';
import { RadioButtonComponent } from './styling/radio-button/radio-button.component';

export const routes: Routes = [
  { path: 'mi-formulario', component: MiFormularioComponent },
  { path: 'button', component: ButtonComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'date-picker', component: DatePickerComponent},
  { path: 'dialog', component: DialogBaseComponent},
  { path: 'select', component: SelectComponent},
  { path: 'input', component: InputComponent},

  { path: 'estilo-boton-basic', component: BasicButtonComponent},
  { path: 'estilo-boton-stroked', component: StrokedButtonComponent},
  { path: 'estilo-radio', component: RadioButtonComponent},
];
