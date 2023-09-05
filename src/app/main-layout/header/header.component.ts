import {Component} from '@angular/core';
import { IUserProfile } from "../../interfaces/profile";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public user: IUserProfile = {
        firstName: "Anonymous",
        lastName: ""
    }

    constructor(
        private routerState: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastr: ToastrService,
    ) {
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
