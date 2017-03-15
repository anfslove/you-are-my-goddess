import { Component, Input } from '@angular/core';

import { Goddess } from './goddess'

@Component({
    selector: 'my-goddess-detail',
    templateUrl: './goddess-detail.component.html',
})
export class GoddessDetailComponent {
    @Input()
    goddess: Goddess;
}