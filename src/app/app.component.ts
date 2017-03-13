import { Component } from '@angular/core';

export class Goddess {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'You Are My Goddess';
  goddess: Goddess = {
    id: 1,
    name: "Yan Jingjing"
  }
}
