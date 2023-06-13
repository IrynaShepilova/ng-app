import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    animations: [
        trigger('trigger', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms', style({ opacity: 1 })),
            ]),
            transition(':leave', [
                animate('0ms', style({ opacity: 0 }))
            ])
    ])]
})
export class LoginPageComponent {
    constructor() {
    }

    submitButtonText = 'Login';
    isRegister: boolean = false;

    action(){
        console.log('action' );
    }

    toggleIsRegister(){
        this.isRegister = !this.isRegister;
    }
}
