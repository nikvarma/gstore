import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions } from '@ngrx/effects';
import { CommonService } from 'src/app/services';
import { State } from '../page-store.state';

@Injectable()
export class CommonEffects {
    constructor(private actions$: Actions, private store: Store<State>, private common: CommonService) {

    }
}