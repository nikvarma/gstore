import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StorePageReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { StorePageEffects } from './effects';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('storePage', StorePageReducer),
        EffectsModule.forFeature([StorePageEffects])
    ],
    providers: [
        StorePageEffects
    ]
})
export class StorePageStoreModule {
    
}