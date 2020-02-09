import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  intervalId: any;
  id: number = 0;
  stopDisabled = true;
  startDisabled = false;

  @Output('OnCounterChange') counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    this.intervalId = setInterval(() => {
      this.incrementCounter();
    }, 1000);
    this.startDisabled = true;
    this.stopDisabled = false;
  }

  onStopClick() {
    clearInterval(this.intervalId);
    this.startDisabled = false;
    this.stopDisabled = true;
  }

  incrementCounter() {
    this.id = this.id + 1;
    this.counterChange.emit(this.id);
  }

  resetCounter() {
    this.id = 0;
    this.counterChange.emit(this.id);
  }


}
