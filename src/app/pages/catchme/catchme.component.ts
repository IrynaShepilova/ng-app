import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {finalize, Subject, takeUntil, timer} from 'rxjs';
import { ToastrService } from "ngx-toastr";

interface Cell {
    i?: number,
    j?: number
}

enum CellsText {
    flash = 'flash',
    ai = 'ai',
    human = 'human'
}

@Component({
  selector: 'app-catchme',
  templateUrl: './catchme.component.html',
  styleUrls: ['./catchme.component.scss']
})
export class CatchmeComponent {
    constructor(
            private formBuilder: FormBuilder ,
            private toastr: ToastrService
    ) {

        this.form = this.formBuilder.group({
            timeoutValue: new FormControl(1000, Validators.required)
        });
    }

    public form: FormGroup;
    public cells: string[][] = this.getEmptyCells();
    public aiCellsWon = 0;
    public humanCellsWon = 0;
    public clickedCell: Cell = {};
    public flashedCell: Cell = {};
    private clickedCellMatch$ = new Subject();
    private timesToWin: number = 10;
    protected readonly CellsText = CellsText;

    private getEmptyCells(): string[][]{
        return  [
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
        ];
    }

    start(){
        this.reset();
        this.flashRandomCell();
    }

    reset(){
        this.cells = this.getEmptyCells();
        this.aiCellsWon = 0;
        this.humanCellsWon = 0;
        delete this.clickedCell.i ;
        delete this.clickedCell.j ;
    }

    flashRandomCell(){
        let i = Math.floor(Math.random()*10);
        let j = Math.floor(Math.random()*10);
        if (this.cells[i][j] !== '') {
            this.flashRandomCell();
        } else {
            this.cells[i][j] = CellsText.flash;
            this.flashedCell = {i, j};
            this.startRace();
        }
    }

    startRace(){
        const timer$ = timer(this.form.get('timeoutValue')?.value);

        timer$
            .pipe(
                takeUntil( this.clickedCellMatch$ ),
                finalize(() => {
                    if ( this.clickedCellIsFlashedCell()  ) {
                        this.humanCellsWon++;
                        this.markFlashedCellHuman();
                    } else  {
                        this.aiCellsWon++;
                        this.markFlashedCellAI();
                    }
                    if (Math.max(this.humanCellsWon,  this.aiCellsWon) < this.timesToWin ) {
                        this.flashRandomCell();
                    } else {
                        if (this.humanCellsWon === this.timesToWin) {
                            this.toastr.success('Human wins!', 'Game over', {closeButton: true, timeOut: 3000})
                        } else {
                            this.toastr.error('AI wins!', 'Game over', {closeButton: true, timeOut: 3000});
                        }
                    }
                })
            )
            .subscribe( () => {});
    }

    fieldButtonClick( i: number, j: number ) {
        this.clickedCell = { i, j };
        if ( this.clickedCellIsFlashedCell() ) {
            this.clickedCellMatch$.next(true);
        }
    }

    clickedCellIsFlashedCell(): boolean{
        return this.clickedCell.i === this.flashedCell.i && this.clickedCell.j === this.flashedCell.j;
    }

    filterInput(){
        let filtered = this.form.get('timeoutValue')?.value.toString().replace(/[^0-9]/g, function(match: string){
            return ''
        });
        this.form.controls['timeoutValue'].setValue( filtered !== '' ? Number(filtered)  : 0);
    }

    private markFlashedCellHuman() {
        // @ts-ignore
        this.cells[this.flashedCell.i][this.flashedCell.j] = CellsText.human;
    }

    private markFlashedCellAI() {
        // @ts-ignore
        this.cells[this.flashedCell.i][this.flashedCell.j] = CellsText.ai;
    }

}
