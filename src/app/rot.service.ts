import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RotService {
  rotBanana() {
    console.log('ROTTING...');
    return of('brown').pipe(delay(3000));
  }
}
