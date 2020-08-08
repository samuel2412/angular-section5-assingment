import { Component, OnInit, OnDestroy ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnDestroy {
  ref:  ReturnType<typeof setInterval>
  @Output() number = new EventEmitter<{value: number}>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    clearInterval(this.ref)
  }

  onStartGame() {
    this.ref = setInterval(()=>{
      this.number.emit({value: Math.random()*100})
    },2000)
  }

  onStopGame () {
    clearInterval(this.ref)
  }
}
