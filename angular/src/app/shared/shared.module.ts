import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxWrapperComponent } from './box-wrapper/box-wrapper.component';
import { FitContainerWrapperComponent } from './fit-container-wrapper/fit-container-wrapper.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    BoxWrapperComponent,
    FitContainerWrapperComponent,
    InputFieldComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxWrapperComponent,
    FitContainerWrapperComponent,
    InputFieldComponent,
    MenuComponent
  ]
})
export class SharedModule { }
