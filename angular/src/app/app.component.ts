import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Vacant';
  pathHidden = ['/login'];

  isHidden(): boolean {
    const path = window.location.pathname;
    return (this.pathHidden.indexOf(path) == -1);
  }
}
