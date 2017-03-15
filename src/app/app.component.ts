import { Component } from '@angular/core';

import { Goddess } from './goddess';

const GODDESSES: Goddess[] = [
  {id: 1, name: 'Yan Jingjing'},
  {id: 2, name: 'Tang Wei'},
  {id: 3, name: 'Tong Liya'},
  {id: 4, name: 'Sun Li'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'You Are My Goddess';
  goddesses = GODDESSES;
  selectedGoddess: Goddess;

  onSelect(goddess: Goddess): void {
    this.selectedGoddess = goddess;
  }
}

