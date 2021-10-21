import { ActionReducerMap } from '@ngrx/store';
import * as BananaStore from './banana/state';

export interface AppState {
  banana: BananaStore.State;
}

export const initialState: AppState = {
  banana: BananaStore.initialState,
};

export const reducers: ActionReducerMap<AppState> = {
  banana: BananaStore.reducer,
};

export const effects: Array<any> = [BananaStore.BananaEffects];

export const getMyBanana = (s: AppState) => s.banana;
