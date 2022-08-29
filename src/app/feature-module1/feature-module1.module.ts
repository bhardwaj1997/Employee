import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompModule1Component } from './comp-module1/comp-module1.component';
import { FeatureModeule2Module } from '../feature-modeule2/feature-modeule2.module';



@NgModule({
  declarations: [
    CompModule1Component
  ],
  imports: [
    CommonModule,
    FeatureModeule2Module
  ],
  exports:[CompModule1Component]
})
export class FeatureModule1Module { }
