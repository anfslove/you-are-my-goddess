import { Injectable } from '@angular/core';

import { Goddess } from './goddess';
import { GODDESSES } from './mock-goddesses';

@Injectable()
export class GoddessService {
    getGoddesses(): Promise<Goddess[]> {
        return Promise.resolve(GODDESSES);
    }
}
