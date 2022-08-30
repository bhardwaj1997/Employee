import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from '../angularMaterial.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [AddComponent, ListComponent, LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [AddComponent,ListComponent,LoginComponent],
})
export class EmployeeModule {}
