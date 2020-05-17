import { NgModule } from "@angular/core";
import { environment } from "../../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "../app.effects";
import { StoreRouterConnectingModule, RouterState } from "@ngrx/router-store";
import { EntityDataModule } from "@ngrx/data";
import { entityConfig } from "../entity-metadata";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "../reducers";
import { StoreEffects } from '../pages/pages-store';
import { CommonEffects } from '../pages/pages-store/common';

@NgModule({
  imports: [
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([StoreEffects, CommonEffects, AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }) : []
  ]
})
export class RootStoreModule {}
