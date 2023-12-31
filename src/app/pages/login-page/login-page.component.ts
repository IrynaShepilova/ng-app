import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {animate, style, transition, trigger} from "@angular/animations";
import { AuthService } from "../../services/auth.service";
import {IUserLogin} from "../../interfaces/user";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

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
export class LoginPageComponent implements OnInit {

    constructor(
        private authService: AuthService,
        private toastr: ToastrService,
        private router: Router) {
    }

    isRegister: boolean = false;
    showPassword: boolean = false;

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required ])
    })

    ngOnInit() {
        this.checkTokenAndRedirectHome();
    }

    submitForm(){
        const email: string = this.loginForm.controls.email.value || '';
        const password: string = this.loginForm.controls.password.value || '';
        const user: IUserLogin = { email, password };

        if (this.isRegister) {
            this.createUser(user);
        } else this.loginUser(user);

    }

    toggleIsRegister(){
        this.isRegister = !this.isRegister;
        if (this.isRegister) {
            this.loginForm.get('password')?.setValidators([Validators.required, Validators.minLength(6) ])
        } else {
            this.loginForm.get('password')?.setValidators([Validators.required])
        }
        this.loginForm.get('password')?.updateValueAndValidity();
    }

    togglePassword($event: MouseEvent){
        $event.preventDefault();
        $event.stopPropagation();
        this.showPassword = !this.showPassword;
    }

    loginUser(user: IUserLogin) {
        return this.authService.loginUser(user).subscribe( (res)=>{
            this.authService.saveToken(res.user.token);
            this.toastr.success('Login successful', '', { timeOut: 2000 });
            this.router.navigate(['']);
        },
            (err) => {
                this.toastr.error(`Login not successful: ${err.error.message}`);
                this.flashFormRed();
            })
    }

    createUser(user: IUserLogin){
        return this.authService.createUser(user).subscribe( (res) => {
            this.authService.saveToken(res.user.token);
            this.toastr.success('User created successfully', '', { timeOut: 2000 });
            this.router.navigate(['profile']);
        },
            (err) => {
                this.toastr.error(`User creation failed: ${err.error.message}`);
                this.flashFormRed();
            })
    }

    flashFormRed(){
        this.loginForm.controls.email.setErrors({'incorrect': true});
        this.loginForm.controls.password.setErrors({'incorrect': true});
        setTimeout(()=> {
            this.loginForm.controls.email.setErrors(null);
            this.loginForm.controls.password.setErrors(null);
        }, 2000);
    }

    skip(){
        this.router.navigate(['']);
    }

    checkEnterAndSubmitForm($event: Event){
        if (this.loginForm.valid ) {
            this.submitForm();
        }
        $event.preventDefault();
        $event.stopPropagation();
    }

    checkTokenAndRedirectHome(){
        if (this.authService.getToken() ) {
            this.router.navigate(['home']);
        }
    }

}
