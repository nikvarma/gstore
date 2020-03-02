import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as storePageActions from './action';
import { StorePageDataService } from 'src/app/services';
import { Action } from '@ngrx/store';

@Injectable()
export class StorePageEffects {
    constructor(private dataService: StorePageDataService, private actions$: Actions) { }

    @Effect()
    loadRequestEffects$: Observable<Action> = this.actions$.pipe(
        ofType<storePageActions.LoadRequestAction>(
            storePageActions.ActionTypes.LOAD_REQUEST
        ),
        startWith(new storePageActions.LoadRequestAction()),
        switchMap(action => this.dataService.getItems().pipe(
            map(
                items => new storePageActions.LoadSuccessAction({
                    item: items
                })
            ),
            catchError(error =>
                of(new storePageActions.LoadFailureAction({ error: error }))
            )
        ))
    )
}