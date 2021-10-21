import { Action } from '@ngrx/store';

export const GET_NEW_BANANA = 'Get New Banana';
export const PEEL_BANANA = 'Peel Banana';
export const EAT_BANANA = 'Eat Banana';
export const INITIATE_HOP = 'Initiate Hop';
export const HOP_COMPLETE = 'Hop Complete';

export class GetNewBanana implements Action {
  readonly type: string = GET_NEW_BANANA;

  constructor(private payload: any) {
    console.log('ACTION: ' + GET_NEW_BANANA);
  }
}

export class PeelBanana implements Action {
  readonly type: string = PEEL_BANANA;

  constructor(private payload: any) {
    console.log('ACTION: ' + PEEL_BANANA);
  }
}

export class EatBanana implements Action {
  readonly type: string = EAT_BANANA;

  constructor(private payload: number) {
    console.log('ACTION: ' + EAT_BANANA);
  }
}

export class InitiateHop implements Action {
  readonly type: string = INITIATE_HOP;

  constructor(private payload: any) {
    console.log('ACTION: ' + INITIATE_HOP);
  }
}

export class HopComplete implements Action {
  readonly type: string = HOP_COMPLETE;

  constructor(private payload: string) {
    console.log('ACTION: ' + HOP_COMPLETE);
  }
}
export type BananaActions =
  | GetNewBanana
  | PeelBanana
  | EatBanana
  | InitiateHop
  | HopComplete;
