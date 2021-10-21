import { GET_NEW_BANANA } from './banana.actions';
import * as ProgramActions from './banana.actions';
import { State } from './banana.state';
import { EAT_BANANA, PEEL_BANANA, HOP_COMPLETE } from '.';

export function reducer(
  state: State,
  action: ProgramActions.BananaActions
): State {
  switch (action.type) {
    case GET_NEW_BANANA:
      console.log('REDUCER: ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow',
      };
    case PEEL_BANANA:
      console.log('REDUCER: ' + PEEL_BANANA);
      return { ...state, isPeeled: true };

    case EAT_BANANA:
      console.log('REDUCER: ' + EAT_BANANA);
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload,
      };

    case ProgramActions.HOP_COMPLETE:
      console.log('REDUCER: ' + HOP_COMPLETE);
      return { ...state, color: 'brown' };

    default:
      return { ...state };
  }
}
