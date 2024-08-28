import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  links: any = [
    { path: '/home', label: 'Home' },
    { path: '/vagas', label: 'Vagas' }
  ]

}
