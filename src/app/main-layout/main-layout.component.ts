import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy {

    public str: String = 'my string'
    private arr: String[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.arr = [
            'aaaa',
            'bbbb',
            'cccc'
        ];
    }

    ngOnDestroy() {
    }

}
