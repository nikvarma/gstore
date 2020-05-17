import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions } from '@ngrx/effects';
import { State } from './page-store.state';
import { CommonService } from 'src/app/services';

@Injectable()
export class StoreEffects {
    constructor(private actions$: Actions, private store: Store<State>, private common: CommonService) {

    }
}