import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompModule2Component } from './comp-module2/comp-module2.component';



@NgModule({
  declarations: [
    CompModule2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[CompModule2Component]
})
export class FeatureModeule2Module { }
