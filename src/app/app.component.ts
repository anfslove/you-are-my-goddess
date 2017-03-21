import { Component, OnInit } from '@angular/core';

import { Goddess } from './goddess';
import { GoddessService } from './goddess.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoddessService]
})

export class AppComponent implements OnInit {
  
  title = 'You Are My Goddess';
  goddesses: Goddess[];
  selectedGoddess: Goddess;

  constructor(private goddessService: GoddessService) { }


  getGoddesses(): void {
      this.goddessService.getGoddesses().then(goddesses => this.goddesses = goddesses);
  }

  ngOnInit(): void {
    this.getGoddesses();
  }

  onSelect(goddess: Goddess): void {
    this.selectedGoddess = goddess;
  }
 
}