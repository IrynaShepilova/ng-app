import {Component, OnInit} from '@angular/core';
import { IUserProfile } from "../../interfaces/profile";
import { Router} from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Store} from "@ngrx/store";
import * as actions from "../../store/actions";
import { Observable} from "rxjs";
import { userProfileSelector } from "../../store/selectors";
import { AppState } from "../../interfaces/userDataState";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public anon : string =  "Anonymous";
    profile$: Observable<IUserProfile> = this.store.select(userProfileSelector );

    constructor(
        private router: Router,
        private authService: AuthService,
        private toastr: ToastrService,
        private store: Store<AppState>,
    ) {
    }

    ngOnInit() {
       this.store.dispatch(actions.getCurrentUserProfile());
    }

    navigateHome() {
        this.router.navigate(["home"]);
    }

    goToUserProfile() {
        this.router.navigate(["profile"])
    }

    logoutUser() {
        this.authService.clearToken();
        this.toastr.info('You have been logged out', '', { timeOut: 2000 });
        this.router.navigate(['login'])
    }
}
