import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getMyBanana } from '../app.state';
import {
  EatBanana,
  GetNewBanana,
  InitiateHop,
  PeelBanana,
} from './state/banana.actions';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css'],
})
export class BananaComponent implements OnInit {
  banana$: Observable<any> = this.store.pipe(select(getMyBanana));
  title = 'My NgRx Banana App';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.newBanana();
  }

  newBanana() {
    this.store.dispatch(new GetNewBanana(null));
  }

  peelBanana() {
    this.store.dispatch(new PeelBanana(null));
  }

  eatBanana() {
    this.store.dispatch(new EatBanana(3));
  }

  timeHop() {
    this.store.dispatch(new InitiateHop(null));
  }
}
