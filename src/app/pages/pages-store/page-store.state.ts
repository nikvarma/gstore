import { AppState } from 'src/app/root-store/root.state';

export interface StoreState {
    location: {
        lat: number,
        lng: number
    }
}

export interface State extends AppState {
    store: StoreState;
}

