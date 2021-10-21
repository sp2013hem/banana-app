import { Injectable } from '@angular/core/src/di/injectable';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { RotService } from '../../rot.service';
import { HopComplete, InitiateHop, INITIATE_HOP } from './banana.actions';

@Injectable()
export class BananaEffects {
  @Effect()
  public InitiateHop$ = this.actions$.pipe(
    ofType(INITIATE_HOP),
    switchMap((action: InitiateHop) =>
      this.rotService.rotBanana().pipe(map((color) => new HopComplete(color)))
    )
  );
  constructor(private actions$: Actions, private rotService: RotService) {}
}
