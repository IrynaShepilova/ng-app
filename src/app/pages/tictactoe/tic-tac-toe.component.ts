import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  template: `
    <div id="statusArea" className="status">Next player: <span>{{queue[0]}}</span></div>
    <div id="winnerArea" className="winner">Winner: <span class="red">{{ winner }}</span></div>
    <button class="reset" (click)="reset()">Reset</button>
    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]; let i = index">
        <button *ngFor="let col of [1, 2, 3]; let j = index"
                class="square"
                (click)="fieldButtonClick(i,j)"
        >{{values[i][j]}}</button>
      </div>
    </section>
  `,
  styleUrls: ['./tic-tac-toe.component.scss'],
    styles: []
})
export class TicTacToeComponent implements OnInit {
    constructor() {}

    public queue: string[] = [];
    public values: string[][] = [];
    public winner: string = '';

    ngOnInit() {
        this.reset();
    }

    fieldButtonClick( i: number, j: number){
        if ( this.values[i][j] === '' ) {
            this.values[i][j] = this.queue[0];
            this.queue.shift();
            this.checkWinner();
        }
    }

    reset(){
    const freshQueue: string[] = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    const emptyValues: string[][] = [ ['', '', ''], ['', '', ''], ['', '', ''] ];
        this.queue = [...freshQueue];
        this.values = [...emptyValues];
        this.winner = '';
    }

    checkWinner() {
        for (let i = 0; i < this.values.length; i++) {
            // row
            if (this.values[i][0] === this.values[i][1] && this.values[i][1] === this.values[i][2] && this.values[i][0] !== '' ) {
                this.winner = this.values[i][0];
            }
            //columns
            if (this.values[0][i] === this.values[1][i] && this.values[1][i] === this.values[2][i] && this.values[0][i] !== ''  ) {
                this.winner = this.values[0][i];
            }
        }
        //diagonals
        if (this.values[0][0] === this.values[1][1] && this.values[1][1] === this.values[2][2] && this.values[1][1] !== ''
            || this.values[0][2] === this.values[1][1] && this.values[1][1] === this.values[2][0] && this.values[1][1] !== '') {
            this.winner = this.values[1][1];
        }
        if (this.winner !== '' ) {
            this.queue = [];
        }
    }
}
