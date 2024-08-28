import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input('name')
  name!: String;
  @Input('type')
  type!: String;

  @Output('set') change = new EventEmitter();

  onChange(e: Event) {
    // @ts-ignore
    const value = e.target.value;
    this.change.emit(value);
  }
}
